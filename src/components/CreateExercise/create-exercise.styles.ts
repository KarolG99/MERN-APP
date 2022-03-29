import styled from "styled-components";

export const ExerciseWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  h3 {
      margin: 10px 0px;
  }

  .date-picker {
    margin: 10px 0;
    cursor: pointer;
    padding: 3px;
  }

  .submit-button {
    padding: 3px 5px;
    border-radius: 5px;
    border: none;
    background-color: #5983fc;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
