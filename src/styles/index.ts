import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url("/bg-home.png");
  width: 100%;
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;
  overflow: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px 115px 40px 115px;

  & > div + div {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    margin: 30px 20px;
  }
`;

export const Content = styled.div`
  & > div {
    margin-top: 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 6px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TextNumberPages = styled.span`
  height: 20px;
  font-size: 12px;
  line-height: 20px;

  margin: 0px 10px;

  color: #333333;
`;

export const ButtonBackPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  margin: 4px;

  background-color: transparent;

  cursor: pointer;

  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);

  box-sizing: border-box;

  :hover {
    background: rgba(51, 51, 51, 0.2);
  }
`;

export const ButtonNextPage = styled(ButtonBackPage)``;

export const Image = styled.img`
  margin: 0;
  padding: 0;
`;
