import { StyledContainer } from "./style";

export default function Container({
  children,
  paddingTop,
  paddingBot,
  justify,
  gap,
}) {
  return (
    <StyledContainer
      paddingTop={paddingTop}
      paddingBot={paddingBot}
      justify={justify}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
}
