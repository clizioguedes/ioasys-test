import React, { useState } from "react";
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
import BookDetail from "../BookDetail";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const [showBookDetail, setShowBookDetail] = useState(false);

  function handleOpenBookDetailModal() {
    setShowBookDetail(true);
  }

  function handleCloseBookDetailModal() {
    setShowBookDetail(false);
  }

  return (
    <>
      <Container onClick={handleOpenBookDetailModal}>
        <ImageContent>
          {book && book.imageUrl ? (
            <Image
              src={book.imageUrl}
              alt="Capa do livro"
              width={81}
              height={122}
              layout="fixed"
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
        {showBookDetail && (
          <BookDetail
            isOpen={true}
            book={book}
            showBookDetail={showBookDetail}
            setShowBookDetail={setShowBookDetail}
            onRequestClose={handleCloseBookDetailModal}
          />
        )}
      </Container>
    </>
  );
}
