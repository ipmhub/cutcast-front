import React, { useState } from "react";
import GradientButton from "../../Components/GradientButton";
import TextInput from "../../Components/TextInput";
import { Container } from "../../styles/page-styles/styles";
import { motion } from "framer-motion";
import { useAuth } from "../../Hook/useAuth";

export default function Login() {
  const { user } = useAuth();
  const { signInWithGoogle, signInWithEmail } = useAuth();

  const [emailInput, setEmailInput] = useState<string>();

  return (
    <Container>
      <motion.div
        className="gradient-purple-bottom-left"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
      <div className="gradient-black-bottom-left" />
      <div className="gradient-orange-top-left" />
      <div className="gradient-orange-top-right" />
      <div className="gradient-black-top-right" />
      <section className="login">
        <section>
          <h1>Entre e junte-se a nós</h1>
          <p>
            Otimize seu tempo e foque no que é importante. Cutcast é a
            ferramenta certa para voce
          </p>
        </section>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Email sent");

            signInWithEmail({ email: emailInput });
          }}
        >
          <TextInput
            name="email"
            type="email"
            placeholder="ex: fulano@exemplo.com"
            label="Entre com o email"
            autoFocus
            onChange={(e: any) => {
              setEmailInput(e.target.value);
            }}
          />
          <GradientButton type="submit">Entrar</GradientButton>
        </form>
        <p>ou</p>
        <div className="sign-with-google" onClick={signInWithGoogle}>
          <img src="/icons/googlelogo.svg" alt="Google logo" />
          <p>Continue com o google</p>
        </div>
      </section>
    </Container>
  );
}
