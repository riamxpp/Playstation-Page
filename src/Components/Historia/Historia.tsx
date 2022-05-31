import React from "react";
import {
  ContainerMissao,
  ContainerNossaHistoria,
  ContainerSubTitulo,
  ContainerVisao,
  HistoriaComponent,
  SubTextoCard,
  TextoHistoria,
  TituloPrincipalHistoria,
  TituloSecundarioHistoria,
} from "./HistoriaStyles";

const Historia = () => {
  return (
    <HistoriaComponent>
      <ContainerNossaHistoria>
        <TituloPrincipalHistoria>Nossa história</TituloPrincipalHistoria>
        <TextoHistoria>
          Em 1997, convencemos que muitas inovações importantes no
          desenvolvimento global não estavam recebendo a atenção que mereciam.
          Acreditando que deveria haver uma maneira melhor de ajudar, eles
          começaram um experimento. Em fevereiro de 2000, eles convidaram
          qualquer empreendedor social para apresentar sua ideia transformadora
          no Banco Mundial. Os mais de 300 participantes variavam de um grupo de
          cientistas da NASA a uma mulher que nunca havia deixado sua aldeia em
          Uganda.
        </TextoHistoria>
        <TextoHistoria>
          O evento foi um sucesso e percebemos que boas ideias podem vir de
          qualquer pessoa, em qualquer lugar e a qualquer momento. Eles também
          perceberam que havia muitos outros que queriam apoiar boas ideias.
          Então, eles deixaram o Banco para lançar a primeira comunidade de
          crowdfunding do mundo em 2002. Hoje, pessoas em mais de 165 países
          podem compartilhar facilmente suas ideias, e doadores individuais e
          empresas podem facilmente apoiar organizações sem fins lucrativos
          avaliadas.
        </TextoHistoria>
      </ContainerNossaHistoria>
      <ContainerSubTitulo>
        <ContainerMissao>
          <TituloSecundarioHistoria>Missão</TituloSecundarioHistoria>
          <SubTextoCard>
            Para transformar a ajuda e a filantropia para acelerar a mudança
            liderada pela comunidade.
          </SubTextoCard>
        </ContainerMissao>
        <ContainerVisao>
          <TituloSecundarioHistoria>Visão</TituloSecundarioHistoria>
          <SubTextoCard>
            Potencial liberado de pessoas para fazer mudanças positivas
            acontecerem.
          </SubTextoCard>
        </ContainerVisao>
      </ContainerSubTitulo>
    </HistoriaComponent>
  );
};

export default Historia;
