import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 40px;

  color: #333333;
`;

export const AuthorsContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthorsText = styled.span`
  flex-direction: row;
  font-size: 0.75rem;
  line-height: 20px;

  color: #ab2680;
`;

export const InfoBookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;

  width: 100%;
`;

export const InfoBookContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoBookTextStrong = styled.span`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  color: #333333;
`;

export const InfoBookText = styled.span`
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #999999;
`;

export const InfoBookTextTitle = styled(InfoBookTextStrong)`
  margin: 20px 0px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonOnClose = styled.button`
  width: 85px;
  height: 36px;

  background: #ffffff;

  border-radius: 44px;
  border-style: none;
  border: 1px solid rgba(51, 51, 51, 0.2);

  color: #b22e6f;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 25px;
`;
