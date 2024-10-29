import * as S from "./Header.styled";
import Button from "../Button/Button.tsx";

export default function Header() {
  return (
    <S.Header position="sticky">
      <S.Logo to="/">Some Company</S.Logo>

      <Button title="Contact us" />
    </S.Header>
  );
}
