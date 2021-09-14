import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { User } from "../../pages/models/User";

import {
  WrapperLogo,
  WrapperInfoLogout,
  Image,
  Title,
  Logo,
  UserInfo,
  HeaderContainer,
  ButtonLogout,
} from "./styles";

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <HeaderContainer>
      <WrapperLogo>
        <Logo src="/logo-black.png" alt="Logomarca" />
        <Title>Books</Title>
      </WrapperLogo>

      <WrapperInfoLogout>
        <UserInfo>
          Bem vindo, <strong>{user}!</strong>{" "}
        </UserInfo>
        <ButtonLogout onClick={handleLogout}>
          <Image src="/shape.png" alt="Shape" width={5.5} height={14} />
          <Image
            src="/arrow-left.png"
            alt="Arrow Left"
            width={10.5}
            height={8}
          />
        </ButtonLogout>
      </WrapperInfoLogout>
    </HeaderContainer>
  );
}
