import React from "react";
import "./App.css";
import Haeder from "./Components/Header/Header";
import Historia from "./Components/Historia/Historia";
import Inovacao from "./Components/Inovacao/Inovacao";
import Inscreva from "./Components/Inscreva/Inscreva";

function App() {
  return (
    <>
      <Haeder />
      <Inscreva />
      <Historia />
      <Inovacao />
    </>
  );
}

export default App;
