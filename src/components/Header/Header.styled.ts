import styled from "styled-components";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import { breakpoints } from "../../lib/breakpoints.ts";

export const Header = styled(AppBar)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  box-shadow: none;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 28px;

  @media screen and (max-width: ${breakpoints.sm}px) {
    font-size: 16px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    font-size: 20px;
  }
`;
