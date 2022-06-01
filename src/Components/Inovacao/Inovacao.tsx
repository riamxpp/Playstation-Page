import React from "react";
import {
  InovacaoComponent,
  InovacaoContainer,
  InovacaoControleContainer,
  InovacaoProgramasContainer,
  InovacaoTexto,
  TituloInovacaoControler,
} from "./InovacaoStyles";
import Background from "../../assents/Background.jpeg";
import Controle from "../../assents/controle-ps5.jpeg";

const Inovacao = () => {
  return (
    <InovacaoComponent backgroundImg={Background}>
      <InovacaoContainer>
        <InovacaoControleContainer backgroundImg={Controle}>
          <TituloInovacaoControler>
            Inovação na indústria de jogos
          </TituloInovacaoControler>
        </InovacaoControleContainer>
        <InovacaoProgramasContainer>
          <InovacaoTexto>
            Programs espaciais tendências tecnológicas útilmas notíficas sobre
            nós
          </InovacaoTexto>
        </InovacaoProgramasContainer>
      </InovacaoContainer>
    </InovacaoComponent>
  );
};

export default Inovacao;
