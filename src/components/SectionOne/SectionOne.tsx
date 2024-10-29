import * as S from "./SectionOne.styled.ts";

export default function SectionOne() {
  return (
    <S.Section>
      <S.TextContent>
        <S.Title variant="h1">Most important title on the page</S.Title>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </S.Text>
      </S.TextContent>
    </S.Section>
  );
}
