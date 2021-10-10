import styled from "styled-components";
import variables from "./common/variables";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
`;

export const Ability = styled.p`
  text-transform: uppercase;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 128px;
  margin: 0 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.25rem 0.75rem;
  background: ${variables.inverse};
  border: solid 1px ${variables.grey};
  border-radius: 4px;
`;