import React from "react";
import { FooterComponent, TextoFooter, LinkFooter } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterComponent>
      <TextoFooter>
        Made by
        <LinkFooter href="https://github.com/riamxpp" target="_blank">
          {" "}
          Riam
        </LinkFooter>
      </TextoFooter>
    </FooterComponent>
  );
};

export default Footer;
