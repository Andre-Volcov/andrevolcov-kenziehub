import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
  justify-content: ${(props) => props.justify || "center"};

  align-items: center;
  background-color: var(--black);
  color: var(--white);
  gap: ${(props) => props.gap || "28px"};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow-y: scroll;
  overflow-x: hidden;

  padding-top: ${(props) => props.paddingTop || ""};
  padding-bottom: ${(props) => props.paddingBot || ""};

  @media (max-width: 768px) {
    width: 90vw;
    height: 70vh;
    justify-content: ${(props) => props.justify || "center"};
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  h3 {
    font-weight: 400;
    color: var(--gray);
  }
`;
