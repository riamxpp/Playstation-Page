import styled from "styled-components";
import {
  ContainerImagemInterface,
  MiniContainerGadgetInterface,
} from "./GadgetInterface";

const GadgetComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0;
`;

const ContainerPrincipalGadget = styled.div`
  width: 1140px;
  display: flex;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 940px;
  }
  @media (max-width: 975px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerGadget = styled.div`
  width: 646px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 532px;
  }
  @media (max-width: 975px) {
    width: 85%;
  }
`;

const SeguraConteudoGadget = styled.div`
  height: 55%;
  padding: 2rem 0;
`;

const TituloGadgetPrincipal = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1.1;
`;

const SubtituloGadget = styled.h5`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 20px 0;
`;

const TextoGadget = styled.p`
  width: 90%;
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.6;
`;

const SeguraMiniContainers = styled.div`
  height: 45%;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const MiniContainerGadget = styled.article<MiniContainerGadgetInterface>`
  width: 33%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "initial"};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 975px) {
    height: 200px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TituloMiniContainer = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ContainerImagem = styled.div<ContainerImagemInterface>`
  width: 494px;
  height: 585px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -300px;
  @media (max-width: 1200px) {
    width: 407px;
  }
  @media (max-width: 975px) {
    width: 85%;
    background-position-x: initial;
  }
`;

export {
  GadgetComponent,
  ContainerPrincipalGadget,
  ContainerGadget,
  SeguraConteudoGadget,
  TituloGadgetPrincipal,
  SubtituloGadget,
  TextoGadget,
  SeguraMiniContainers,
  MiniContainerGadget,
  TituloMiniContainer,
  ContainerImagem,
};
