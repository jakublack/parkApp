import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_MUTATION, GET_CURRENT_USER } from '../lib/graphql/queries';
import type {
  LoginVariables,
  LoginResponse,
  GetCurrentUserResponse,
  User,
} from '../lib/graphql/types';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const [loginMutation, { loading: loginLoading, error: loginError }] =
    useMutation<LoginResponse, LoginVariables>(LOGIN_MUTATION);

  const {
    data: currentUserData,
    loading: currentUserLoading,
    error: currentUserError,
  } = useQuery<GetCurrentUserResponse>(GET_CURRENT_USER, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (currentUserData?.me) {
      setUser(currentUserData.me);
    }
  }, [currentUserData]);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await loginMutation({
        variables: { email, password },
      });

      if (data?.login?.token) {
        localStorage.setItem('authToken', data.login.token);
        setIsAuthenticated(true);
        setUser(data.login.user);
        return { success: true };
      }

      return { success: false, error: 'Invalid response from server' };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    loginLoading,
    loginError,
    currentUserLoading,
    currentUserError,
  };
};
