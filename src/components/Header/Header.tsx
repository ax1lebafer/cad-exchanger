import * as S from "./Header.styled";

export default function Header() {
  return (
    <S.Header position="sticky">
      <S.Logo to="/">Some Company</S.Logo>

      <S.ButtonStyled variant="contained" size="large">
        Contact us
      </S.ButtonStyled>
    </S.Header>
  );
}
