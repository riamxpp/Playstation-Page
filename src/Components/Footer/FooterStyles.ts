import styled from "styled-components";
import { colors } from "../../colors";

const FooterComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background: #333333;
  display: flex;
  justify-content: center;
`;

const TextoFooter = styled.p`
  padding: 1rem;
  color: ${colors.textTerciry};
`;

const LinkFooter = styled.a`
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textTerciry};
  &:hover {
    color: ${colors.textSecond};
    transition: 0.3s;
  }
`;

export { FooterComponent, TextoFooter, LinkFooter };
