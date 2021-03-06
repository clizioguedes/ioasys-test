import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "ioasys-books.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://books.ioasys.com.br/api/v1",
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
