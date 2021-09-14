import Router from "next/router";
import { useState, useEffect, createContext } from "react";
import { setCookie, parseCookies } from "nookies";

import { AxiosError, AxiosResponse } from "axios";

import { api } from "../pages/api/server";
import { signInRequest } from "../pages/api/auth";
import { User, UserCrentials } from "../pages/models/User";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: UserCrentials) => Promise<AxiosResponse>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { "ioasys-books.token": token } = parseCookies();
    if (token) {
      setIsAuthenticated(true);
      Router.push("/");
    }
  }, []);

  async function signIn({
    email,
    password,
  }: UserCrentials): Promise<AxiosResponse> {
    const response = await signInRequest({ email, password })
      .then((response: AxiosResponse) => {
        const token = response.headers.authorization;
        const user: User = response.data;

        setCookie(undefined, "ioasys-books.token", token, {
          maxAge: 60 * 60 * 1, // 1 Hour
        });
        setCookie(undefined, "ioasys-books.name", user.name, {
          maxAge: 60 * 60 * 1, // 1 Hour
        });

        setIsAuthenticated(true);

        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        Router.push("/");

        return response;
      })
      .catch((err: AxiosError) => {
        return err.response;
      });

    return response;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
