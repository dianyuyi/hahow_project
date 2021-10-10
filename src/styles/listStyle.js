import styled from "styled-components";
import variables from "./common/variables";
import { Link } from "react-router-dom";


export const Outer = styled.div`
  width:100%;
  height: 100%;
  text-align: center;
`
export const ListContainer = styled.div`
  max-width: 1024px;
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${variables.gutter};
  margin: 2rem 0 0.5rem 0;

  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    flex-wrap: wrap;
  }
`;
export const ListWrapper = styled.div`
  flex-basis: 25%;
  border: ${({ isSelect }) =>
    isSelect ? `${variables.lightYellow} solid 2px` : `none`};
  background: ${({ isSelect }) =>
    isSelect ? `${variables.lightBrown}` : `${variables.inverse}`};
  margin: 1rem;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 4px;
  color: ${variables.primary};
  transition: 0.35s ease;

  @media only screen and (max-width: ${variables.breakpointPad}) {
    flex-basis: 50%;
    padding: 0 ${variables.gutter};
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    flex-basis: 100%;
    padding: 0 ${variables.gutter};
  }
  &:hover {
    transform: translate(2%, 2%);
    box-shadow: inset 2px 0px 2px rgba(0, 0, 0, 25%);
  }
`

export const ListCard = styled(Link)`
  width: 100%;
  color: ${variables.primary};

  .image {
    padding: 0.5rem;
    width: 100%;
  }

  .name {
    margin: 0.5rem auto 0.5rem auto;
    font-size: clamp(1rem, 2vw, 2rem);
    text-align: center;
  }
`;
