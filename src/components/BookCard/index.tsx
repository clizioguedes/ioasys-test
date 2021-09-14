import React from "react";
import Image from "next/image";
import { Book } from "../../pages/models/Book";

import {
  Container,
  ImageContent,
  Content,
  Title,
  Authors,
  InfoBook,
  InfoBookText,
  InfoBookSemImagem,
} from "./styles";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Container>
      <ImageContent>
        {book && book.imageUrl ? (
          <Image
            src={book.imageUrl}
            alt="Capa do livro"
            width={81}
            height={122}
          />
        ) : (
          <InfoBookSemImagem>Sem Imagem</InfoBookSemImagem>
        )}
      </ImageContent>
      <Content>
        <Title>{book.title}</Title>
        <Authors>{book.authors[0]}</Authors>

        <InfoBook>
          <InfoBookText>{book.pageCount} Páginas</InfoBookText>
          <InfoBookText>Editora {book.publisher}</InfoBookText>
          <InfoBookText>Publicado em {book.published}</InfoBookText>
        </InfoBook>
      </Content>
    </Container>
  );
}
