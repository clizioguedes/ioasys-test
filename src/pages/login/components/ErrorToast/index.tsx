import React from "react";

import { ArrowUp, Container, Content, SpanError } from "./styles";

interface ErrorToastProps {
  title: string;
}

export default function ErrorToast({ title }: ErrorToastProps) {
  return (
    <Container>
      <ArrowUp />
      <Content>
        <SpanError>{title}</SpanError>
      </Content>
    </Container>
  );
}
