import React from "react";

import { Book } from "../models/Book";

import BookCard from "../../components/BookCard";

import { Container, BookContent } from "./styles";

interface BooksProps {
  books: Book[];
}

export default function Books({ books }: BooksProps) {
  return (
    <Container>
      <BookContent>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BookContent>
    </Container>
  );
}
