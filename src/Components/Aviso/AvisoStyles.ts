import styled from "styled-components";
import { colors } from "../../colors";

const AvisoComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 5rem 0;
  background-color: #2c5bcc;
`;

const ContainerAviso = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const AvisoPrincipalTitulo = styled.h2`
  color: ${colors.textTerciry};
  width: 30rem;
  font-weight: 700;
  font-size: 2.25rem;
`;

const AvisoSecundarioTitulo = styled.h5`
  color: ${colors.textTerciry};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.25rem;
  width: 25rem;
  text-align: right;
  margin-top: 65px;
  font-weight: 400;
`;

export {
  AvisoComponent,
  ContainerAviso,
  AvisoPrincipalTitulo,
  AvisoSecundarioTitulo,
};
