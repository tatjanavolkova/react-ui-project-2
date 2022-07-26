import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import {
  colors,
  devices,
  fontSizes,
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
import SideBarContext from "../../context/SideBarContext";
import SearchContext from "../../context/SearchContext";
import DataContext from "../../context/DataContext";

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

const CartLink = styled(StyledLink)`
  position: relative;
  span {
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    text-align: center;
    position: absolute;
    color: ${colors.bg};
  }
`;

const SearchFieldWrapper = styled.div`
  position: relative;
  min-width: 2rem;
  min-height: 2rem;

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

const CategoryMenu = styled.div`
  display: none;
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 4rem;
  justify-content: center;
  background: ${colors.lightBlue};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};

  ${devices.tablet} {
    display: flex;
  }
`;

const CategoryLink = styled(Link)`
  width: 8rem;
  height: 100%;
  border-right: 1px solid ${colors.bg};
  text-decoration: none;
  color: ${colors.darkBlue};
  font-size: ${fontSizes.xs};
  text-align: center;
  line-height: 2rem;
  text-transform: uppercase;

  &:nth-child(1) {
    border-left: 1px solid ${colors.bg};
  }
  
  &:hover {
    opacity: 0.6;
  }
`;

const Nav: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
  const { value, setValue } = useContext(SearchContext);
  const { categories } = useContext(DataContext);
  //search 
  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <StyledNav>
        <BurgerBtn onClick={(): void => setIsSideBarOpen(!isSideBarOpen)} />
        <StyledLink to="/" icon={logoImage} />
        <NavActionWrapper>
          <SearchFieldWrapper>
            <SearchField type="text" onChange={onChangeHandler} />
          </SearchFieldWrapper>
          <StyledLink to="/auth" onClick={(): void => { }} icon={userIcon} />
          <StyledLink to="/wishlist" icon={heartIcon} />
          <StyledLink to="/cart" icon={bagIcon} />
        </NavActionWrapper>
      </StyledNav>
      <CategoryMenu>
        {categories ? (
          <>
            {categories.slice(0, 6).map((category: string, index) => {
              return (
                <CategoryLink key={index} to={`/${category}`}>
                  {category}
                </CategoryLink>
              );
            })}
          </>
        ) : (
          <div>loading ... </div>
        )}
      </CategoryMenu>
    </>
  );
};

export default Nav;