import styled from "styled-components";

export const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
  color: var(--white);
  height: ${(props) => props.height || ""};

  button {
    align-self: ${(props) => props.alignSelf || "flex-end"};
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--white);
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    color: var(--white);
  }

  h4 {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray);
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
