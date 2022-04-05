import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function TextInput(props: ButtonProps) {
  return <Container {...props} />;
}
