import React from "react";
import { Container } from "./styles";
import { IoNotificationsSharp, IoMenuSharp } from "react-icons/io5";
import { useAuth } from "../../Hook/useAuth";
import { motion } from "framer-motion";

export default function Header() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <div>
        <IoMenuSharp color="#fff" className="icons" />
        <div>
          <IoNotificationsSharp
            color="#fff"
            className="icons"
            onClick={() => signOut()}
          />
          <img src={user?.avatarUrl} alt="Foto de perfil" />
          {console.log(user?.avatarUrl)}
        </div>
      </div>
    </Container>
  );
}
