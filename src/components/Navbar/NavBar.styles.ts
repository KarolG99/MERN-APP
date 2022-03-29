import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 5px;

  .nav-link {
    text-decoration: none;
    margin: 5px 20px;
    -webkit-box-shadow: 0px 2px 3px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 2px 3px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 2px 3px 0px rgba(66, 68, 90, 1);
    padding: 4px 6px;
    border-radius: 7px;
  }
`;
