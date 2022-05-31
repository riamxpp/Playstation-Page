import styled from "styled-components";

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
`;

const ListaHeader = styled.ul`
  display: flex;
  list-style: none;
`;

const ItemHeader = styled.li``;

const LinkHeader = styled.a`
  padding: 1rem;
  cursor: pointer;
`;

export {
  HeaderComponent,
  SearchInputHeader,
  NavHeader,
  ListaHeader,
  ItemHeader,
  LinkHeader,
};
