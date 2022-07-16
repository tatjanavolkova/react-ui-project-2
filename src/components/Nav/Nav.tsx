import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {
    colors,
    devices,
    fontSizes,
    margins,
    zIndexes,
} from "../../theme/theme";
import logoImage from "../../assets/logo-128.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import userIcon from "../../assets/icons/icon-person.svg";

const StyledNav = styled.header`
  border: 1px solid #ff0ff0;
  width: 100%;
  height: 4rem; //64px
  position: absolute;
  top: 0;
  box-sizing: border-box;
`;

const BurgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  float: left;
  background: url(${menuIcon}) center no-repeat;

  ${devices.mobile} {
    display: none;
  }
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  margin: ${margins.xs};
  float: left;
  background: url(${logoImage}) center/contain no-repeat ${colors.lightBlue};
`;

const Nav = () => {
    return (
        <StyledNav>
            <BurgerBtn onClick={(): void => { }} />
            <Logo />
        </StyledNav>
    );
};

export default Nav;