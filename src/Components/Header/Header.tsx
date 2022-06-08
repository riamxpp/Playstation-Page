import React, { useEffect, useRef, useState } from "react";
import {
  ButtonHeader,
  HeaderComponent,
  ItemHeader,
  LinkHeader,
  ListaHeader,
  NavHeader,
  SearchInputHeader,
} from "./HeaderStyles";

const Haeder = () => {
  const [activeMobileButton, setActiveMobileButton] = useState("");
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeMobileButton) {
      window.addEventListener("click", (event) => {
        if (event.target !== mobileButtonRef.current) {
          setActiveMobileButton("");
        }
      });
    }
  }, [activeMobileButton]);

  function ativaMobileButton() {
    if (activeMobileButton) {
      setActiveMobileButton("");
    } else setActiveMobileButton("flex");
  }

  return (
    <HeaderComponent>
      <SearchInputHeader placeholder="Search"></SearchInputHeader>
      <NavHeader>
        <ButtonHeader
          activeAnimation={activeMobileButton}
          ref={mobileButtonRef}
          onClick={ativaMobileButton}
        ></ButtonHeader>
        <ListaHeader displayButton={activeMobileButton}>
          <ItemHeader>
            <LinkHeader>Inscreva-se</LinkHeader>{" "}
          </ItemHeader>
          <ItemHeader>
            <LinkHeader>História</LinkHeader>{" "}
          </ItemHeader>
          <ItemHeader>
            <LinkHeader>Jogos</LinkHeader>{" "}
          </ItemHeader>
        </ListaHeader>
      </NavHeader>
    </HeaderComponent>
  );
};

export default Haeder;
