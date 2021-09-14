import { AxiosResponse } from "axios";
import { Book } from "../models/Book";
import { api } from "./server";

export interface BookParamsRequest {
  page: number;
  amount?: number;
  category?: string;
}

type BookParamsResponse = {
  data: Book[];
  page: number;
  totalItems: number;
  totalPages: number;
};

export async function getBooks(
  params?: BookParamsRequest
): Promise<BookParamsResponse> {
  const response = await api.get("/books", {
    params: {
      page: params && params.page ? params.page : 1,
      amount: params && params.amount ? params.amount : 12,
      category: params && params.category ? params.category : "biographies",
    },
  });

  return response.data;
}
