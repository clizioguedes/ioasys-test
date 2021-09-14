import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperInfoLogout = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;

export const Logo = styled.img`
  width: 104px;
  height: 36px;

  margin-top: 2px;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 200;
  color: #333333;

  margin: 0px 0px 0px 15px;
`;

export const UserInfo = styled.span`
  font-size: 0.75rem;
  line-height: 16px;

  color: #333333;
  margin-right: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  background-color: transparent;

  cursor: pointer;

  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);

  box-sizing: border-box;

  :hover {
    background: rgba(51, 51, 51, 0.2);
  }
`;

export const Image = styled.img`
  margin: 0;
  padding: 0;
`;
