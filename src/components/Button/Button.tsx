import * as S from "./Button.styled.ts";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <S.ButtonStyled onClick={onClick} variant="contained" size="large">
      {title}
    </S.ButtonStyled>
  );
}
