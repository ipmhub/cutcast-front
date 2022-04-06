import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Container } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  textarea?: boolean | false;
}

export default function TextInput({ name, label, textarea, ...rest }: any) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea id={name} type="text" {...rest} />
      ) : (
        <input id={name} type="text" {...rest} />
      )}
    </Container>
  );
}
