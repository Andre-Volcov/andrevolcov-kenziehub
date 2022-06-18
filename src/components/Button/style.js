import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width || "100%"};
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#FF577F"};
  color: ${(props) => props.font || "#FFFFFF"};
  border: 1.2182px solid ${(props) => props.color || "#FF577F"};
  border-radius: 4px;
  border-radius: 4px;
  padding: 0;
  flex: none;

  font-weight: 500;
  font-size: ${(props) => props.size || "16px"};
`;
