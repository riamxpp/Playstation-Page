import styled from "styled-components";
import { colors } from "../../colors";
import { BaixeJogosComponentInterface } from "./BaixeJogosInterface";

const BaixeJogosComponent = styled.section<BaixeJogosComponentInterface>`
  width: 100%;
  height: 653px;
  background-image: url(${(props) => props.backgruondImg});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const TituloBaixeJogos = styled.h2`
  color: ${colors.textTerciry};
  padding-top: 80px;
  font-weight: 700;
  width: 576px;
  font-size: 2.25rem;
  margin: 0 auto;
  @media (max-width: 750px) {
    width: 90%;
    text-align: center;
  }
`;

export { BaixeJogosComponent, TituloBaixeJogos };
