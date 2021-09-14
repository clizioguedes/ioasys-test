import React, { useState } from "react";

import { Book } from "../../pages/models/Book";

import BookCard from "../BookCard";
import BookDetail from "../BookDetail";

import { Container, BookContent } from "./styles";

interface BooksProps {
  books: Book[];
}

export default function Books({ books }: BooksProps) {
  // const [visible, setVisible] = useState();

  // function showModal(book: Book) {}

  return (
    <>
      <Container>
        <BookContent>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </BookContent>
      </Container>
    </>
  );
}
