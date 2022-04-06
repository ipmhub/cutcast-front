import React, { useRef, useState } from "react";
import { Container } from "./styles";
import {
  IoNotificationsSharp,
  IoMenuSharp,
  IoCutSharp,
  IoVideocam,
} from "react-icons/io5";
import { useAuth } from "../../Hook/useAuth";
import { motion } from "framer-motion";
import Main from "../Main";
import Link from "next/link";

export default function Header() {
  const { user, signOut } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const containerRef = useRef(null);

  return (
    <Container>
      <Main>
        <div>
          <IoMenuSharp
            color="#fff"
            className="icons"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          />
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
        <section
          className="dropdown"
          style={dropdown ? { display: "flex" } : { display: "none" }}
        >
          <h2>Cortes</h2>
          <Link href="/create/cut">
            <div>
              <section>
                <IoCutSharp color="#fff" />
              </section>
              <h4>Criar um corte</h4>{" "}
            </div>
          </Link>

          <div>
            <section>
              <IoVideocam color="#fff" />
            </section>
            <h4>Meus cortes</h4>
          </div>
        </section>
      </Main>
    </Container>
  );
}
