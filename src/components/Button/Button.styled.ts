import styled from "styled-components";
import { Button } from "@mui/material";
import { breakpoints } from "../../lib/breakpoints.ts";

export const ButtonStyled = styled(Button)`
  background-color: #222020;
  border-radius: 10px;
  padding: 5px 50px;

  &:hover {
    background-color: #302f2f;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 5px 25px;
  }
`;
