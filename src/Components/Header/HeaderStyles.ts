import styled from "styled-components";
import { colors } from "../../colors";
import { ButtonHeaderInteface, ListaHeaderInterface } from "./HeaderInterface";

const HeaderComponent = styled.header`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e7e7e7;
`;

const SearchInputHeader = styled.input`
  height: 2rem;
  padding-left: 0.6rem;
  margin-left: 60px;
`;

const NavHeader = styled.nav`
  margin-right: 60px;
  font-weight: 400;
  @media (max-width: 650px) {
    position: relative;
    width: 100px;
    height: auto;
  }
`;

const ButtonHeader = styled.button<ButtonHeaderInteface>`
  display: none;
  @media (max-width: 650px) {
    display: block;
    width: 2rem;
    height: 2rem;
    background: transparent;
    cursor: pointer;
    border: none;
    margin-left: 76px;
    &::after {
      content: "";
      display: inline-block;
      height: 2px;
      width: 1.7rem;
      background: #333;
      box-shadow: 0 8px #333, 0 -8px #333;
    }
  }
`;

const ListaHeader = styled.ul<ListaHeaderInterface>`
  display: flex;
  list-style: none;
  @media (max-width: 650px) {
    flex-direction: column;
    position: absolute;
    padding: 0;
    width: 133px;
    text-align: right;
    background-color: ${colors.textTerciry};
    padding: 0.5rem;
    border-radius: 0 0 8px 8px;
    display: ${(props) => (props.displayButton ? props.displayButton : "none")};
    animation: 0.3s animaLeft ease forwards;
  }
  @keyframes animaLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ItemHeader = styled.li`
  @media (max-width: 650px) {
    margin-bottom: 0.5rem;
  }
`;

const LinkHeader = styled.a`
  padding: 1rem;
  cursor: pointer;
`;

export {
  HeaderComponent,
  SearchInputHeader,
  NavHeader,
  ButtonHeader,
  ListaHeader,
  ItemHeader,
  LinkHeader,
};
