import * as S from "./Header.styled";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <S.Header position="sticky">
      <Typography variant="h4" component="h1">
        Some Company
      </Typography>
      <S.ButtonStyled variant="contained" size="large">
        Contact us
      </S.ButtonStyled>
    </S.Header>
  );
}
