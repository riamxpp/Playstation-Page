import React from "react";
import "./App.css";
import Aviso from "./Components/Aviso/Aviso";
import BaixeJogos from "./Components/BaixeJogos/BaixeJogos";
import Gadget from "./Components/Gadgets/Gadget";
import Haeder from "./Components/Header/Header";
import Historia from "./Components/Historia/Historia";
import Inovacao from "./Components/Inovacao/Inovacao";
import Inscreva from "./Components/Inscreva/Inscreva";
import VrPictures from "./Components/VrPictures/VrPictures";

function App() {
  return (
    <>
      <Haeder />
      <Inscreva />
      <Historia />
      <Inovacao />
      <Aviso />
      <Gadget />
      <VrPictures />
      <BaixeJogos />
    </>
  );
}

export default App;
