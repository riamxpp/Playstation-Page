import React from "react";
import {
  SlideJogosComponente,
  WrapperSlide,
  MoveSlide,
  ContainerTexto,
  ContainerFoto,
  TituloSlide,
  TextoSlide,
  ContainerContent,
  ButtonPrev,
  ButtonNext,
  ContainerButton,
} from "./SlideJogosStyles";
import Slide1 from "../../assents/Mulher-vr.jpeg";
import Slide2 from "../../assents/homem-vr-1.jpeg";
import Prev from "./Prev";
import Next from "./Next";

const SlideJogos = () => {
  return (
    <SlideJogosComponente>
      <WrapperSlide>
        <ContainerButton>
          <ButtonPrev>
            <Prev></Prev>
          </ButtonPrev>
          <ButtonNext>
            <Next></Next>
          </ButtonNext>
        </ContainerButton>

        <MoveSlide>
          <ContainerContent>
            <ContainerTexto>
              <TituloSlide>MAIS DE 50 JOGOS ONLINE</TituloSlide>
              <TextoSlide>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </TextoSlide>
            </ContainerTexto>
            <ContainerFoto backgroundImg={Slide1}></ContainerFoto>
          </ContainerContent>
          <ContainerContent>
            <ContainerTexto>
              <TituloSlide>
                JOGOS GRÁTIS INCLUÍDOS NO PRIME, SEUS PARA MANTER PARA SEMPRE
              </TituloSlide>
              <TextoSlide>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </TextoSlide>
            </ContainerTexto>
            <ContainerFoto backgroundImg={Slide2}></ContainerFoto>
          </ContainerContent>
        </MoveSlide>
      </WrapperSlide>
    </SlideJogosComponente>
  );
};

export default SlideJogos;
