import React from "react";
import Image from "next/image";
import Modal from "react-modal";

import { Book } from "../../pages/models/Book";
import {
  Container,
  ImageContent,
  Content,
  TitleContainer,
  Title,
  AuthorsContainer,
  AuthorsText,
  InfoBookContainer,
  InfoBookContent,
  InfoBookTextTitle,
  InfoBookTextStrong,
  InfoBookText,
  DescriptionContainer,
  ButtonOnClose,
  ButtonContainer,
} from "./styles";

type BookDetailProps = {
  book: Book;
  isOpen: boolean;
  onRequestClose: () => void;
};

export default function BookDetail({
  book,
  isOpen,
  onRequestClose,
}: BookDetailProps) {
  function onCloseModal() {
    onRequestClose();
  }
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnEsc
      appElement={document.getElementById("app") as HTMLElement}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        content: {
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          margin: "0 auto",
          width: "75%",
          height: "75%",
          minHeight: "90%",
          background: "#FFFFFF",
          boxShadow: "0px 16px 80px rgba(0, 0, 0, 0.32)",
          borderRadius: 4,
        },
      }}
    >
      <Container>
        <ImageContent>
          <Image
            src={book.imageUrl}
            alt="Capa do livro"
            width={349}
            height={512}
          />
        </ImageContent>

        <Content>
          <TitleContainer>
            <Title>{book.title}</Title>
          </TitleContainer>
          <AuthorsContainer>
            {book.authors.map((author, index, array) => (
              <AuthorsText key={author}>
                {author}
                {index !== array.length - 1 && ","}&nbsp;
              </AuthorsText>
            ))}
          </AuthorsContainer>

          <InfoBookContainer>
            <InfoBookContent>
              <InfoBookTextTitle>INFORMAÇÕES</InfoBookTextTitle>
            </InfoBookContent>
            <InfoBookContent>
              <InfoBookTextStrong>Páginas</InfoBookTextStrong>
              <InfoBookText>{book.pageCount}</InfoBookText>
            </InfoBookContent>

            <InfoBookContent>
              <InfoBookTextStrong>Editora</InfoBookTextStrong>
              <InfoBookText>{book.publisher}</InfoBookText>
            </InfoBookContent>

            <InfoBookContent>
              <InfoBookTextStrong>Publicação</InfoBookTextStrong>
              <InfoBookText>{book.published}</InfoBookText>{" "}
            </InfoBookContent>

            <InfoBookContent>
              <InfoBookTextStrong>Idioma</InfoBookTextStrong>
              <InfoBookText>{book.language}</InfoBookText>{" "}
            </InfoBookContent>

            <InfoBookContent>
              <InfoBookTextStrong>ISBN-10</InfoBookTextStrong>
              <InfoBookText>{book.isbn10}</InfoBookText>{" "}
            </InfoBookContent>

            <InfoBookContent>
              <InfoBookTextStrong>ISBN-13</InfoBookTextStrong>
              <InfoBookText>{book.isbn13}</InfoBookText>
            </InfoBookContent>
          </InfoBookContainer>

          <DescriptionContainer>
            <InfoBookContent>
              <InfoBookTextTitle>RESENHA DA EDITORA</InfoBookTextTitle>
            </InfoBookContent>
            <InfoBookText>
              <Image
                src="/quotes.png"
                alt="Capa do livro"
                width={17}
                height={14}
                layout="fixed"
              />
              &nbsp;{book.description}
            </InfoBookText>
          </DescriptionContainer>
          <ButtonContainer>
            <ButtonOnClose onClick={onCloseModal}>Fechar</ButtonOnClose>
          </ButtonContainer>
        </Content>
      </Container>
    </Modal>
  );
}
