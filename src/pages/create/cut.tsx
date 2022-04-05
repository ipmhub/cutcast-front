import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import Header from "../../Components/Header";
import { withProtected } from "../../Hook/routes";
import { Container } from "../../styles/page-styles/CreateCut";
import { IoLinkSharp, IoAddSharp } from "react-icons/io5";
import { useTheme } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useOrdinal } from "../../Hook/useOrdinal";
import GradientButton from "../../Components/GradientButton";

function cut() {
  const theme: any = useTheme();

  const [cutLength, setCutLength] = useState<Array<number>>([1]);
  return (
    <Container>
      <Header />
      <main>
        <form>
          <h1>Crie seus cortes</h1>
          <div className="youtube-link-container">
            <IoLinkSharp color={theme?.colors.pink || "#F25690"} />
            <input
              type="link"
              placeholder="Adicione o link do vídeo que será cortado"
            />
          </div>

          {cutLength.map((cut) => (
            <section className="cut">
              <h2>{useOrdinal(cut)} Corte</h2>

              <div>
                <section>
                  <TextInput
                    name="title"
                    type="text"
                    label="Qual será o título do corte?"
                    placeholder="ex: NÃO ACREDITO QUE ELE FEZ ISSO"
                    required
                  />
                  <TextInput
                    name="thumbnail"
                    type="text"
                    label="Qual será o titulo da thumbnail?"
                    placeholder="ex: OLHA O QUE ELE FEZ"
                    required
                  />
                  <div>
                    <TextInput
                      name="time-started"
                      label="Inicio do corte"
                      type="time"
                      step="1"
                      required
                      style={{ maxWidth: "200px" }}
                    />
                    <TextInput
                      name="time-finished"
                      label="Fim do corte"
                      type="time"
                      step="1"
                      required
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                </section>
                <section>
                  <TextInput
                    name="alo"
                    type="text"
                    textarea={true}
                    label="Qual será o título do corte?"
                    placeholder="ex: NÃO ACREDITO QUE ELE FEZ ISSO"
                    required
                  />
                </section>
              </div>
            </section>
          ))}
          <div className="container-buttons">
            <IoAddSharp
              onClick={() => {
                setCutLength([...cutLength, cutLength.length + 1]);
              }}
              style={{ cursor: "pointer" }}
              size="30"
              color={theme?.colors.pink || "#F25690"}
            >
              add
            </IoAddSharp>
            <GradientButton>Confirmar</GradientButton>
          </div>
        </form>
      </main>
    </Container>
  );
}

export default withProtected(cut);
