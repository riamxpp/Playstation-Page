import styled from "styled-components";
import { colors } from "../../colors";
import { ContainerFotoInterface } from "./SlideJogosInterface";

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
  width: auto;
  height: 100%;
  background: blue;
  display: flex;
  background: ${colors.textSecond};
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
`;

const ButtonNext = styled.button`
  background: transparent;
  color: #446bdd;
  border: none;
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
};
