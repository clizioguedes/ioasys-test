import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Content = styled.div`
  width: 239px;
  height: 45px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowUp = styled(Container)`
  width: 0;
  height: 0;
  margin-left: 20px;

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(255, 255, 255, 0.4); ;
`;

export const SpanError = styled.span`
  width: 207px;
  height: 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  color: #ffffff;
`;
