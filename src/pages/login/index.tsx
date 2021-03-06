import React, { useState } from "react";
import GradientButton from "../../Components/GradientButton";
import TextInput from "../../Components/TextInput";
import { Container } from "../../styles/page-styles/styles";
import { motion } from "framer-motion";
import { useAuth } from "../../Hook/useAuth";
import Main from "../../Components/Main";
import { withPublic } from "../../Hook/routes";
function Login() {
  const { user } = useAuth();
  const { signInWithGoogle, signInWithEmail } = useAuth();

  const [emailInput, setEmailInput] = useState<string>();

  return (
    <Container>
      <motion.div
        className="gradient-purple-bottom-left"
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div
        whileHover={{ scale: 1.2, rotate: -45 }}
        className="gradient-black-bottom-left"
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div
        whileHover={{ scale: 1.2, rotate: 45 }}
        className="gradient-orange-top-left"
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div
        whileHover={{ scale: 1.2, rotate: 45 }}
        className="gradient-orange-top-right"
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div
        whileHover={{ scale: 1.2, rotate: 45 }}
        className="gradient-black-top-right"
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Main>
        <section className="login">
          <section>
            <h1>Entre e junte-se a n??s</h1>
            <p>
              Otimize seu tempo e foque no que ?? importante. Cutcast ?? a
              ferramenta certa para voce
            </p>
          </section>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("Email sent");
              if (emailInput) {
                signInWithEmail(emailInput);
              }
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
      </Main>
    </Container>
  );
}

export default withPublic(Login);
