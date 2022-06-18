import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: ${(props) => props.height || ""};
  background-color: var(--black);

  border-radius: 4px;
  gap: 22px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: none;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--white);
    align-self: center;
  }

  h3 {
    font-weight: 600;
    font-size: 12px;
    color: var(--gray);
    align-self: center;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;
  }

  select {
    flex: none;
    background-color: var(--grayBackground);
    border: none;
    border-radius: 4px;
    padding: 0;
    padding-left: 16px;
    color: var(--white);
    width: 100%;
    height: 40px;
    outline: 0px;
  }

  span {
    color: red;
  }
`;
