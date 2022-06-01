import styled from "styled-components";
import { ContainerFotoInterface } from "./VrPictureInterface";

const VrPictureComponet = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
`;

const ContainerFoto = styled.div<ContainerFotoInterface>`
  width: 25%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
`;

export { VrPictureComponet, ContainerFoto };
