import styled from "styled-components";
import variables from "./common/variables";


export const Outer = styled.div`
  width:100%;
  height: 100%;
  text-align: center;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  border-radius: 8px;
  /* background: ${variables.lightYellow}; */
  padding: 0 ${variables.gutter};
  margin: auto;
`;

export const Wrapper = styled.div`
  flex-basis: 50%;
  padding: 2rem;
  box-sizing: border-box;

  @media screen and (${variables.breakpointPhone}) {
    flex-basis: 100%;
  }
`;

export const StatusWrapper = styled(Wrapper)`
  width: 100%;
  padding: 0 ${variables.gutter};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
`;