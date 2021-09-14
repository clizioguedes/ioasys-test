import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: 160px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  & > div {
    margin-left: 15px;
    padding-right: 5px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  cursor: pointer;
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #333333;
`;

export const Authors = styled.div`
  width: 100%;
  height: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
`;

export const InfoBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 20px;

  width: 100%;
`;

export const InfoBookText = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const InfoBookSemImagem = styled.span`
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
