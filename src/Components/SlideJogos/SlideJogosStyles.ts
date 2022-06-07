import styled from "styled-components";
import { colors } from "../../colors";
import {
  ContainerFotoInterface,
  CurrentSlideInterface,
} from "./SlideJogosInterface";

const SlideJogosComponente = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: ${colors.textSecond};
`;

const WrapperSlide = styled.div`
  width: 1140px;
  height: 607px;
  margin: 0 auto;
  overflow: hidden;
  background: ${colors.textSecond};
  position: relative;
`;

const MoveSlide = styled.div`
  height: 100%;
  background: blue;
  display: flex;
  background: ${colors.textSecond};
  transition: 0.5s ease-in-out;
`;

const ContainerContent = styled.div`
  display: flex;
  width: 1140px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
`;

const ContainerTexto = styled.div`
  background: #fff;
  width: 45%;
  height: 75%;
  border-radius: 30px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const TituloSlide = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 4px;
  color: #7f93d0;
`;

const TextoSlide = styled.p`
  font-size: 1.25rem;
  text-align: left;
  color: ${colors.textSecond};
  word-wrap: break-word;
  line-height: 1.6;
`;

const ContainerFoto = styled.div<ContainerFotoInterface>`
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) => props.positionImg};
  width: 45%;
  height: 75%;
  border-radius: 30px;
`;

const ContainerButton = styled.div`
  width: 1140px;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
`;

const ButtonPrev = styled.button`
  background: transparent;
  color: #446bdd;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const ButtonNext = styled.button`
  background: transparent;
  color: #446bdd;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const WrapperCurrentSlide = styled.div`
  width: 1140px;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 90%;
`;

const ContainerCurrentSlide = styled.div`
  width: 3rem;
  height: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const CurrentSlide = styled.div<CurrentSlideInterface>`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#c7d0ec"};
  z-index: 1;
  cursor: pointer;
`;

export {
  SlideJogosComponente,
  WrapperSlide,
  MoveSlide,
  ContainerContent,
  ContainerTexto,
  TituloSlide,
  TextoSlide,
  ContainerFoto,
  ContainerButton,
  ButtonPrev,
  ButtonNext,
  WrapperCurrentSlide,
  ContainerCurrentSlide,
  CurrentSlide,
};
