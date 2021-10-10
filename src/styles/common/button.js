import styled from "styled-components";
import variables from "./variables";

export const BtnWrapper = styled.div`
  margin: 2rem 0;
`;

export const UploadButton = styled.button`
  min-width: 128px;
  padding: 0.25rem;
  font-size: 1.25rem;
  background: ${variables.inverse};
  border: solid 1px ${variables.grey};
  border-radius: 4px;
`;

export const Points = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;