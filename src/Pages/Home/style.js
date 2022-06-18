import styled from "styled-components";

export const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid var(--gray);
  flex: none;
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
`;

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 49px;
  background: var(--blackBackground);
  border-radius: 4px;
  flex: none;
  margin-bottom: 20px;

  h6 {
    margin-left: 20px;
  }

  p {
    display: flex;
    gap: 20px;
    flex-direction: row;
    margin-right: 20px;
  }

  p > svg {
    color: var(--gray);
  }

  p > svg:hover {
    cursor: pointer;
    filter: brightness(1.75);
  }

  :first-of-type {
    margin-top: 20px;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fefefe;
    margin: auto;
    margin-top: 10%;
    border-radius: 4px;
    width: 30%;
    height: 45%;
    background-color: var(--black);
    gap: 20px;

    form {
      width: 90%;
      height: 75%;
      justify-content: space-between;
    }
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: var(--white);
  }

  select {
    box-sizing: border-box;
    outline: 1px solid white;
    width: 99%;
    flex: none;
    margin-left: 1px;
  }

  header {
    display: flex;
    width: 100%;
    height: 45px;
    background-color: var(--gray);
    color: var(--white);
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    h5 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    section {
      width: 90%;
      margin-top: 20%;
    }
  }
`;
