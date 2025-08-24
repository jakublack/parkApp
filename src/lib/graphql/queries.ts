import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      email
      name
    }
  }
`;

export const GET_PILOTS = gql`
  query GetPilots($limit: Int, $offset: Int) {
    pilots(limit: $limit, offset: $offset) {
      id
      name
      status
      location
    }
  }
`;
