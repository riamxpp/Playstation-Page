import React from "react";
import { BaixeJogosComponent, TituloBaixeJogos } from "./BaixeJogosStyles";
import Controle from "../../assents/controle-ps5.jpeg";

const BaixeJogos = () => {
  return (
    <BaixeJogosComponent backgruondImg={Controle}>
      <TituloBaixeJogos>
        Baixe jogos e jogue jogos grátis todos os meses.
      </TituloBaixeJogos>
    </BaixeJogosComponent>
  );
};

export default BaixeJogos;
