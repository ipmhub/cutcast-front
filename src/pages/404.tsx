import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import GradientButton from "../Components/GradientButton";
import Main from "../Components/Main";
import { Container } from "../styles/page-styles/404";

export default function Error() {
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
        <div>
          <h1>{"<404/>"}</h1>
          <h2>um erro ocorreu</h2>
          <p>mas não se desespere, clique nesse botão bonito para voltar </p>
          <Link href="/">
            <GradientButton>Quero voltar!</GradientButton>
          </Link>
        </div>
      </Main>
    </Container>
  );
}
