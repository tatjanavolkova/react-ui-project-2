import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colors,
  fontSizes,
  margins,
  paddings,
  devices,
  zIndexes,
} from "../../theme/theme";

import xIcon from "../../assets/icons/icon-x.svg";
import { useContext } from "react";
import SideBarContext from "../../context/SideBarContext";

const NavBackDrop = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 4rem;
  background: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.sideBar};
`;

const NavContent = styled.div`
  width: 80%;
  max-width: 18rem;
  height: calc(100vh - 4rem);
  background: ${colors.bg};
  z-index: ${zIndexes.sideBar};
  box-shadow: -3px 3px 5px -5px ${colors.shadow};
  
  ${devices.mobile} {
    display: none;
  }
`;

const NavItem = styled(Link)`
width: 100%;
height: 4rem;
background: ${colors.lightBlue};
display: block;
margin-bottom: ${margins.md};
padding-left: ${paddings.sm};
text-decoration: none;
color: ${colors.darkBlue};
line-height: 4rem;
box-sizing: border-box;
`;

const AuthLink = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  color: ${colors.darkBlue};
  line-height: 4rem;
  padding-left: ${paddings.sm};
  font-size: ${fontSizes.md};
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: ${margins.xs};
  width: 2rem;
  height: 2rem;
  background: url(${xIcon}) center/contain no-repeat;
`;

const SideBar: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);

  return (
    <NavBackDrop>
      <CloseButton onClick={() => setIsSideBarOpen(false)} />
      <NavContent>
        <NavItem to="">CATEGORY NAME</NavItem>
        <NavItem to="">CATEGORY NAME</NavItem>
        <NavItem to="">CATEGORY NAME</NavItem>
        <NavItem to="">CATEGORY NAME</NavItem>
        <NavItem to="">CATEGORY NAME</NavItem>
        <NavItem to="">CATEGORY NAME</NavItem>
        <AuthLink>Login/ Register</AuthLink>
      </NavContent>
    </NavBackDrop>
  )
};

export default SideBar;
