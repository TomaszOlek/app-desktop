import Background from "../assets/background.png";
import styled from "styled-components";
import { Box } from "@blend-ui/core";

export const StyledBox = styled(Box)`
  /* border-radius: 20px; */
  height: 100vh;
  z-index: 1;
  border: ${props => props.borders.input.disabled};
  background-color: ${props => props.colors.baseWhite};
`;
export const StyledBackground = styled(Box)`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.3; */
  width: 100%;
  height: 631px;
  z-index: 2;
  border: ${props => props.borders.input.disabled};
  background-color: ${props => props.colors.baseWhite};
`;
