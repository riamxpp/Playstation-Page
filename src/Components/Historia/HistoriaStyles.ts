import styled from "styled-components";
import { colors } from "../../colors";

const HistoriaComponent = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const ContainerNossaHistoria = styled.div`
  width: 990px;
  @media (max-width: 1050px) {
    width: 720px;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const TituloPrincipalHistoria = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  margin: 30px 0 50px 0;
`;

const TextoHistoria = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1rem;
  color: ${colors.textSecond};
`;

const ContainerSubTitulo = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 20px;
  @media (max-width: 1050px) {
    width: 730px;
  }
  @media (max-width: 800px) {
    width: 90%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerMissao = styled.article`
  width: 50%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ContainerVisao = styled.article`
  width: 50%;
  background-color: #f2f2f2;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TituloSecundarioHistoria = styled.h3`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  margin: 0 150px;
`;

const SubTextoCard = styled.p`
  text-align: center;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  word-wrap: break-word;
  width: 400px;
  @media (max-width: 1050px) {
    width: 95%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
`;

export {
  HistoriaComponent,
  ContainerNossaHistoria,
  TituloPrincipalHistoria,
  TextoHistoria,
  ContainerSubTitulo,
  ContainerMissao,
  ContainerVisao,
  TituloSecundarioHistoria,
  SubTextoCard,
};
