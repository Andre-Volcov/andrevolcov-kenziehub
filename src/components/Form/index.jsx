import { StyledForm } from "./style";

export default function Form({ children, height, ...rest }) {
  return (
    <StyledForm height={height} {...rest}>
      {children}
    </StyledForm>
  );
}
