import styled from "styled-components";

export const StyledInput = styled.input`
  flex: none;
  background-color: var(--grayBackground);
  border: none;
  border-radius: 4px;
  padding: 0;
  padding-left: 16px;
  width: 90%;
  color: var(--white);

  :hover {
    cursor: text;
  }

  :focus {
    outline: none;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: inline;
  width: 99%;
  height: 40px;
  padding: 0;
  border: 1.2182px solid #f8f9fa;
  border: ${(props) => props.border || "1.2182px solid #f8f9fa"};
  border-radius: 4px;
  background-color: var(--grayBackground);
  flex: none;
  align-items: center;

  svg {
    color: var(--gray);
  }

  :hover {
    cursor: text;
  }
`;
