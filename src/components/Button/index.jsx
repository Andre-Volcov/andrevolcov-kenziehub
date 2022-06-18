import { StyledButton } from "./style";

export default function Button({
  width,
  background,
  color,
  alignSelf,
  font,
  onClick,
  children,
  type,
  size,
}) {
  return (
    <StyledButton
      width={width}
      background-color={background}
      color={color}
      font={font}
      onClick={onClick}
      type={type}
      alignSelf={alignSelf}
      size={size}
    >
      {children}
    </StyledButton>
  );
}
