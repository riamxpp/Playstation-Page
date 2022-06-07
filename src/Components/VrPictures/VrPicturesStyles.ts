import styled from "styled-components";
import { ContainerFotoInterface } from "./VrPictureInterface";

const VrPictureComponet = styled.section`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1000px) {
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

const ContainerFoto = styled.div<ContainerFotoInterface>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  grid-column: auto;
  @media (max-width: 1000px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    height: 600px;
    background-position: 0 -100px;
  }
`;

export { VrPictureComponet, ContainerFoto };
