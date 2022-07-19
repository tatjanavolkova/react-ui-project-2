import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  colors,
  devices,
  margins,
  paddings,
  zIndexes,
} from "../../theme/theme";
import logoImage from "../../assets/logo-128.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import userIcon from "../../assets/icons/icon-person.svg";
import searchIcon from "../../assets/icons/icon-search.svg";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import bagIcon from "../../assets/icons/icon-bag-empty.svg";

const StyledNav = styled.header`
  width: 100%;
  height: 4rem; //64px
  position: absolute;
  top: 0;
  box-sizing: border-box;
  background: ${colors.bg};
  padding: ${paddings.sm};
  box-shadow: -3px 0px 12px -5px ${colors.shadow};
`;

const BurgerBtn = styled.button`
  width: 2rem;
  height: 2rem;
  float: left;
  background: url(${menuIcon}) center no-repeat;

  ${devices.mobile} {
    display: none;
  }
`;

const NavActionWrapper = styled.div`
  display: flex;
  height: 100%;
  float: right;
  justify-content: right;
  align-items: center;
`

const StyledLink = styled(Link) <{ icon: string }>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-left: ${margins.sm};
  background: url(${(props) => props && props.icon}) center/contain no-repeat;
`

const SearchFieldWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 2rem;
    height: 1.5rem;
    right: 1px;
    top: 0.25rem;
    background: url(${searchIcon}) ${colors.bg} center/contain no-repeat;
    z-index: ${zIndexes.sideBar};
  }
`

const SearchField = styled.input`
  display: none;
  max-width: 10rem;
  min-width: 6rem;
  height: 2rem;
  border: 1px solid ${colors.darkBlue};
  box-sizing: border-box;

  ${devices.mobile} {
    display: inline-block;
  }  
`;

const Nav = () => {
  return (
    <StyledNav>
      <BurgerBtn onClick={(): void => { }} />
      <StyledLink to="/" icon={logoImage} />
      <NavActionWrapper>
        <SearchFieldWrapper>
          <SearchField type="text" />
        </SearchFieldWrapper>
        <StyledLink as="div" onClick={(): void => { }} icon={userIcon} />
        <StyledLink to="/wishlist" icon={heartIcon} />
        <StyledLink to="/cart" icon={bagIcon} />
      </NavActionWrapper>
    </StyledNav>
  );
};

export default Nav;