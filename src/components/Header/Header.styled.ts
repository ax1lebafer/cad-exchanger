import styled from "styled-components";
import { AppBar, Button } from "@mui/material";

export const Header = styled(AppBar)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  box-shadow: none;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  background-color: #222020;
  border-radius: 10px;
  height: 35px;
`;
