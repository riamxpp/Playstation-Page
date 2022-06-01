import React from "react";
import {
  GadgetComponent,
  ContainerPrincipalGadget,
  ContainerGadget,
  TituloGadgetPrincipal,
  SubtituloGadget,
  TextoGadget,
  SeguraConteudoGadget,
  SeguraMiniContainers,
  MiniContainerGadget,
  ContainerImagem,
  TituloMiniContainer,
} from "./GadgetStyles";
import background from "../../assents/Background.jpeg";
import ArrowRight from "./ArrowRight";

const Gadget = () => {
  return (
    <GadgetComponent>
      <ContainerPrincipalGadget>
        <ContainerGadget>
          <SeguraConteudoGadget>
            <TituloGadgetPrincipal>Gadgets de jogos</TituloGadgetPrincipal>
            <SubtituloGadget>descubra um mundo sem limites</SubtituloGadget>
            <TextoGadget>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </TextoGadget>
          </SeguraConteudoGadget>
          <SeguraMiniContainers>
            <MiniContainerGadget>
              <TituloMiniContainer>água testada</TituloMiniContainer>

              <ArrowRight></ArrowRight>
            </MiniContainerGadget>
            <MiniContainerGadget backgroundColor="#F2F2F2">
              <TituloMiniContainer>moldura esculpida</TituloMiniContainer>

              <ArrowRight></ArrowRight>
            </MiniContainerGadget>
            <MiniContainerGadget>
              <TituloMiniContainer>vidro esculpido</TituloMiniContainer>
              <ArrowRight></ArrowRight>
            </MiniContainerGadget>
          </SeguraMiniContainers>
        </ContainerGadget>
        <ContainerImagem backgroundImg={background}></ContainerImagem>
      </ContainerPrincipalGadget>
    </GadgetComponent>
  );
};

export default Gadget;
