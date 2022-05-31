import React from "react";
import {
  HeaderComponent,
  ItemHeader,
  LinkHeader,
  ListaHeader,
  NavHeader,
  SearchInputHeader,
} from "./HeaderStyles";

const Haeder = () => {
  return (
    <HeaderComponent>
      <SearchInputHeader placeholder="Search"></SearchInputHeader>
      <NavHeader>
        <ListaHeader>
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
