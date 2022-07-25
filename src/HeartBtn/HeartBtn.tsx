import styled from "styled-components";
import heartIcon from "../assets/icons/icon-heart-empty.svg";

const HeartBtn = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: url(${heartIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
`;

export default HeartBtn;