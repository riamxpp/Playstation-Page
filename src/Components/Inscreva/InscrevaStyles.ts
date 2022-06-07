import styled from "styled-components";
import { colors } from "../../colors";
import { InscrevaInterfaceSection } from "./InscrevaInterface";

const InscrevaSection = styled.section<InscrevaInterfaceSection>`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backgroundImg});
  background-size: 120%;
  background-position: 0 -130px;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    background-size: 200%;
    height: 450px;
    background-position: 50% 50%;
  }
  @media (max-width: 400px) {
    background-size: 300%;
  }
`;

const ContainerConteudo = styled.div`
  height: auto;
  width: 551px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TituloInscreva = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  text-align: center;
  @media (max-width: 900px) {
    width: 429px;
  }
`;

const TextoInscreva = styled.p`
  color: ${colors.textSecond};
  text-align: center;
  font-size: 1rem;
  word-wrap: break-word;
  line-height: 1.6;
  @media (max-width: 900px) {
    width: 366px;
  }
`;

export { InscrevaSection, ContainerConteudo, TituloInscreva, TextoInscreva };
