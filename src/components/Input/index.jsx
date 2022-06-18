import { StyledInput, Box } from "./style";

export default function Input({
  placeholder,
  type,
  value,
  border,
  children,
  name,
  register,
  ...rest
}) {
  return (
    <Box border={border}>
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={value}
        {...register(name)}
        {...rest}
      ></StyledInput>
      {children}
    </Box>
  );
}
