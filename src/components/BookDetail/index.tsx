import React, { Dispatch, SetStateAction } from "react";
import Modal from "react-modal";

import { Book } from "../../pages/models/Book";

import { Background, Container } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type BookDetailProps = {
  book?: Book;
  showBookDetail?: boolean;
  setShowBookDetail?: Dispatch<SetStateAction<boolean>>;

  isOpen: boolean;
  onRequestClose?: () => void;
};

export default function BookDetail({
  book,
  showBookDetail,
  setShowBookDetail,
  isOpen,
  onRequestClose,
}: BookDetailProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      appElement={document.getElementById("app")}
      ariaHideApp={false}
    >
      <Background>
        <Container>{book.authors}</Container>
      </Background>
    </Modal>
  );
}
