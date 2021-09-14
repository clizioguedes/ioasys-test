import { AxiosResponse } from "axios";
import { UserCrentials } from "../models/User";
import { api } from "./server";

export async function signInRequest(
  user: UserCrentials
): Promise<AxiosResponse> {
  const { email, password } = user;

  const response = await api.post("/auth/sign-in", { email, password });
  return response;
}
