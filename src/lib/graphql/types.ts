export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResponse {
  login: {
    token: string;
    user: User;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}

export interface GetCurrentUserResponse {
  me: User;
}

export interface Pilot {
  id: string;
  name: string;
  status: string;
  location: string;
}

export interface GetPilotsResponse {
  pilots: Pilot[];
}

export interface GetPilotsVariables {
  limit?: number;
  offset?: number;
}
