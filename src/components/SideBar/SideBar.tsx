import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colors,
  margins,
  paddings,
  devices,
  zIndexes,
} from "../../theme/theme";

const NavWrapper = styled.div`
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

const SideBar: React.FC = () => {
  return (
    <NavWrapper>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
      <NavItem to="">CATEGORY NAME</NavItem>
    </NavWrapper>
  )
};

export default SideBar;
