import styled from "styled-components";

export const Text = styled.p`
  text-align: center;
  margin: 1px;
`;

export const CardColor = styled.div`
  background-color: ${(props) => props.title};
  width: 100%;
  height: 80%;
  color: transparent;
`;

export const SelectColorCardButton = styled.div`
  background-color: 'white'
  color: ${(props) => (props.chosen ? "white" : "black")};
  padding: 5px;
  border-radius: 5px;
  width: 15vw;
  height: 18vw;
  border-radius:2%;
  margin: 3vh 1.5vh 0px 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.05);
  }
`;
