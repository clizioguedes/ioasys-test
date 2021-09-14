import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Header from "../components/Header";
import Books from "../components/Books";
import { Book } from "./models/Book";
import { User } from "./models/User";

import {
  Container,
  Wrapper,
  Content,
  Footer,
  ButtonBackPage,
  Image,
  ButtonNextPage,
  TextNumberPages,
} from "./styles";
import { BookParamsRequest, getBooks } from "./api/books";

interface HomeProps {
  books: Book[];
  user: User;
  params: Params;
}

interface Params {
  page: number;
  totalPages?: number;
  totalItems?: number;
}

export default function Home({ user }: HomeProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    handleBooks();
  }, []);

  async function handleBooks() {
    const requestData = await getBooks().then((response) => response);

    setBooks(requestData.data);
    setPage(requestData.page);

    const totalPages = Math.ceil(requestData.totalPages);
    setTotalPages(totalPages);

    setTotalItems(requestData.totalItems);
  }

  async function handleBooksNextPage() {
    const nextPage = page + 1;
    const params: BookParamsRequest = {
      page: nextPage,
    };

    const requestData = await getBooks(params).then((response) => response);

    setBooks(requestData.data);
    setPage(nextPage);
  }

  async function handleBooksPreviousPage() {
    const previousPage = page - 1;
    const params: BookParamsRequest = {
      page: previousPage,
    };

    const requestData = await getBooks(params).then((response) => response);

    setBooks(requestData.data);
    setPage(previousPage);
  }

  return (
    <Container>
      <Wrapper>
        <Content>
          <Header user={user} />
          <Books books={books} />
          <Footer>
            <ButtonBackPage
              onClick={handleBooksPreviousPage}
              disabled={page === 1}
            >
              <Image
                src="/chevron-left-shape.png"
                alt="Página Anterior de Livros"
                width={4}
                height={8}
              />
            </ButtonBackPage>
            <TextNumberPages>
              {" "}
              Página {page} de {totalPages}{" "}
            </TextNumberPages>
            <ButtonNextPage
              onClick={handleBooksNextPage}
              disabled={page === totalPages}
            >
              <Image
                src="/chevron-right-shape.png"
                alt="Próxima Página de Livros"
                width={4}
                height={8}
              />
            </ButtonNextPage>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["ioasys-books.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { ["ioasys-books.name"]: userName } = parseCookies(ctx);
  const names = userName.split(" ");
  const user = names[0];

  return {
    props: {
      user,
    },
  };
};
