import { useState, useEffect } from 'react';
import { useError } from '../contexts/ErrorContext';

// Use simple User type to avoid import issues
type User = {
  id: string;
  email: string;
  name: string;
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<Error | null>(null);

  const { addError } = useError();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoginLoading(true);
    setLoginError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === 'tester@parkapp.pl' && password === 'testPassword') {
        const mockToken = 'mock_jwt_token_' + Date.now();
        const mockUser: User = {
          id: '1',
          email: 'tester@parkapp.pl',
          name: 'Test User',
        };

        localStorage.setItem('authToken', mockToken);
        localStorage.setItem('userData', JSON.stringify(mockUser));
        setIsAuthenticated(true);
        setUser(mockUser);
        setLoginLoading(false);
        return { success: true };
      }

      setLoginLoading(false);
      const error = new Error('Invalid email or password');
      setLoginError(error);
      addError(
        'Invalid email or password. Please check your credentials.',
        'error'
      );
      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      setLoginLoading(false);
      const errorMessage =
        error instanceof Error ? error.message : 'Login failed';
      setLoginError(new Error(errorMessage));
      addError(`Login failed: ${errorMessage}`, 'error');
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
    setLoginError(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    loginLoading,
    loginError,
  };
};
