import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import ErrorToast from "./components/ErrorToast";

import {
  Container,
  Wrapper,
  Logo,
  Title,
  Header,
  ContentInputLogin,
  ContentInputPassword,
  Label,
  Input,
  ButtonSignIn,
  LabelButton,
} from "./styles";

export default function Login() {
  const [values, setValues] = useState(initialState);
  const { signIn } = useContext(AuthContext);
  const [errorCredentials, setErrorCredentials] = useState(false);
  const [errorNotFoundFields, setErrorNotFoundFields] = useState(false);

  async function handleSignIn() {
    setErrorCredentials(false);
    setErrorNotFoundFields(false);

    await signIn(values).then((response) => {
      if (response.status === 401) {
        setErrorCredentials(true);
      }
      if (response.status === 400) {
        setErrorNotFoundFields(true);
      }
    });
  }

  function initialState() {
    return { email: "", password: "" };
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo src="/logo-white.png" alt="Logomarca" />
          <Title>Books</Title>
        </Header>

        <ContentInputLogin>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </ContentInputLogin>

        <ContentInputPassword>
          <LabelButton>
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </LabelButton>
          <ButtonSignIn onClick={handleSignIn}>Entrar</ButtonSignIn>
        </ContentInputPassword>
        {errorCredentials && <ErrorToast title="Email e/ou senha incorretos" />}
        {errorNotFoundFields && (
          <ErrorToast title="Email e senha obrigatórios" />
        )}
      </Wrapper>
    </Container>
  );
}
