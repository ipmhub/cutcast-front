import React, { ReactNode } from "react";
import { Container } from "./styles";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
