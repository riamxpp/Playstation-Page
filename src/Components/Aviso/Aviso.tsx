import React from "react";
import {
  AvisoComponent,
  AvisoPrincipalTitulo,
  AvisoSecundarioTitulo,
  ContainerAviso,
} from "./AvisoStyles";

const Aviso = () => {
  return (
    <AvisoComponent>
      <ContainerAviso>
        <AvisoPrincipalTitulo>
          Inscreva-se e obtenha novos itens para jogos populares e muito mais
        </AvisoPrincipalTitulo>
        <AvisoSecundarioTitulo>
          volte todos os meses para reivindicar sue saque.
        </AvisoSecundarioTitulo>
      </ContainerAviso>
    </AvisoComponent>
  );
};

export default Aviso;
