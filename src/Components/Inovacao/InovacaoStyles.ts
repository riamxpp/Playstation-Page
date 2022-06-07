import styled from "styled-components";
import {
  InovacaoComponentInterface,
  InovacaoControleContainerInterface,
} from "./InovacaoInterface";

const InovacaoComponent = styled.section<InovacaoComponentInterface>`
  height: auto;
  width: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  @media (max-width: 1200px) {
    background-size: 120%;
  }
  @media (max-width: 950px) {
    background-size: 150%;
  }
  @media (max-width: 850px) {
    background-size: 250%;
  }
  @media (max-width: 500px) {
    background-size: 450%;
  }
`;

const InovacaoContainer = styled.div`
  width: 1104px;
  height: auto;
  display: flex;
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 950px) {
    width: 800px;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InovacaoControleContainer = styled.article<InovacaoControleContainerInterface>`
  height: 670px;
  width: 580px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -300px -50px;
  @media (max-width: 1100px) {
    width: 470px;
  }
  @media (max-width: 850px) {
    width: 60%;
    height: 350px;
  }
`;

const TituloInovacaoControler = styled.h2`
  color: #fff;
  line-height: 1;
  font-weight: 900;
  font-size: 2.25rem;
  word-wrap: break-word;
  text-align: left;
  margin: 25px 0 0 25px;
  width: 14rem;
`;

const InovacaoProgramasContainer = styled.article`
  width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 850px) {
    width: 40%;
    height: 350px;
  }
  @media (max-width: 650px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

const InovacaoTexto = styled.p`
  width: 25rem;
  line-height: 2.2;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 35px;
  text-align: right;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export {
  InovacaoComponent,
  InovacaoContainer,
  InovacaoControleContainer,
  TituloInovacaoControler,
  InovacaoProgramasContainer,
  InovacaoTexto,
};
