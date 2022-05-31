import React from "react";
import {
  ContainerConteudo,
  InscrevaSection,
  TextoInscreva,
  TituloInscreva,
} from "./InscrevaStyles";
import backgroundImg from "../../assents/Background-inscreva-se.jpeg";

const Inscreva = () => {
  return (
    <InscrevaSection backgroundImg={backgroundImg}>
      <ContainerConteudo>
        <TituloInscreva>
          Inscreva-se e obtenha novos itens para jogos populares e muito mais
        </TituloInscreva>
        <TextoInscreva>
          Volte todo mês para reivindicar seu saque. Basta vincular sua conta do
          jogo após reivindicar e seu loot estará esperando por você no jogo.
        </TextoInscreva>
      </ContainerConteudo>
    </InscrevaSection>
  );
};

export default Inscreva;
