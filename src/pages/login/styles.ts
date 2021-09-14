import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url("/bg-login.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;

  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 368px;
  height: 200px;

  margin-left: 115px;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 104px;
  height: 36px;

  margin-top: 2px;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 200;
  color: #ffffff;

  margin: 0px 0px 0px 20px;

  width: 77px;
  height: 40px;
`;

export const ContentInputLogin = styled.div`
  display: flex;
  flex-direction: column;

  height: 60px;
  margin-top: 34px;
  padding: 8px 20px 8px 20px;

  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);

  border-radius: 4px;
`;

export const ContentInputPassword = styled(ContentInputLogin)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;

  opacity: 0.5;

  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;

  color: #ffffff;
`;

export const ButtonSignIn = styled.button`
  width: 85px;
  height: 36px;

  background: #ffffff;

  border-radius: 44px;
  border-style: none;

  color: #b22e6f;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LabelButton = styled.div`
  display: flex;
  flex-direction: column;
`;
