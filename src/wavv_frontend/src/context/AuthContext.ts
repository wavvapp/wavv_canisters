import { CredentialResponse } from "@react-oauth/google";
import { createContext } from "react";

export interface JwtPayload  {
  iss: string
  azp: string,
  aud: string,
  sub: string,
  email: string,
  email_verified: boolean,
  nbf: string,
  name: string,
  picture: string,
  given_name: string,
  family_name: string,
  iat: number,
  exp: number,
  jti: string
}

interface AuthContextType {
  user: JwtPayload | null ;
  loading: boolean;
  isAuthenticated: boolean;
  login: (credentialResponse: CredentialResponse) => void;
  logout: () => void;
  checkAuthStatus: () => void;
  principal: string | null;
  setPrincipal: (principal: string | null) => void;
  isSucessfulyConnected: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
