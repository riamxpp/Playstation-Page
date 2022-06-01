import React from "react";
import { VrPictureComponet, ContainerFoto } from "./VrPicturesStyles";
import mulher1 from "../../assents/Mulher-vr.jpeg";
import homem1 from "../../assents/homem-vr-1.jpeg";
import homem2 from "../../assents/homem-vr-2.jpeg";
import homem3 from "../../assents/homem-vr-3.jpeg";

const VrPictures = () => {
  return (
    <VrPictureComponet>
      <ContainerFoto backgroundImg={mulher1}></ContainerFoto>
      <ContainerFoto backgroundImg={homem1}></ContainerFoto>
      <ContainerFoto backgroundImg={homem2}></ContainerFoto>
      <ContainerFoto backgroundImg={homem3}></ContainerFoto>
    </VrPictureComponet>
  );
};

export default VrPictures;
