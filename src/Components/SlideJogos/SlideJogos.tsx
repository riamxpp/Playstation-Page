import React, { useRef, useEffect, useState } from "react";
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
  WrapperCurrentSlide,
  ContainerCurrentSlide,
  CurrentSlide,
} from "./SlideJogosStyles";
import Slide1 from "../../assents/Mulher-vr.jpeg";
import Slide2 from "../../assents/homem-vr-1.jpeg";
import Prev from "./Prev";
import Next from "./Next";

const TOTAL_SLIDES = 2;
const INITIAL_SLIDES = 1;
const SlideJogos = () => {
  const [widthContent, setWidthContent] = useState<number>(0);
  const [slidePage, setSlidePage] = useState<number>(INITIAL_SLIDES);
  const ContainerContentRef = useRef<HTMLDivElement>(null);
  const MoveSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  function nextSlide() {
    if (slidePage !== TOTAL_SLIDES) {
      setSlidePage((prev) => (prev += 1));

      if (ContainerContentRef.current?.offsetWidth)
        setWidthContent(-ContainerContentRef.current?.offsetWidth);
    }
  }

  function prevSlide() {
    if (slidePage !== INITIAL_SLIDES) {
      setSlidePage((prev) => (prev -= 1));
      setWidthContent((prev) => (prev -= +widthContent));
    }
  }

  return (
    <SlideJogosComponente>
      <WrapperSlide>
        <ContainerButton>
          <ButtonPrev onClick={prevSlide}>
            <Prev></Prev>
          </ButtonPrev>
          <ButtonNext onClick={nextSlide}>
            <Next></Next>
          </ButtonNext>
        </ContainerButton>
        <WrapperCurrentSlide>
          <ContainerCurrentSlide>
            <CurrentSlide
              onClick={() => prevSlide()}
              backgroundColor={slidePage === 1 ? "#7F93D0" : ""}
            ></CurrentSlide>
            <CurrentSlide
              onClick={() => nextSlide()}
              backgroundColor={slidePage === 2 ? "#7F93D0" : ""}
            ></CurrentSlide>
          </ContainerCurrentSlide>
        </WrapperCurrentSlide>

        <MoveSlide
          ref={MoveSlideRef}
          style={{ transform: `translateX(${widthContent}px)` }}
        >
          <ContainerContent ref={ContainerContentRef}>
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
            <ContainerFoto
              backgroundImg={Slide2}
              positionImg="0 -150px"
            ></ContainerFoto>
          </ContainerContent>
        </MoveSlide>
      </WrapperSlide>
    </SlideJogosComponente>
  );
};

export default SlideJogos;
