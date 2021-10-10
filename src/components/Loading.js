import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import styled from "styled-components";
import { css } from "@emotion/react";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300;
  height: 300;
  margin: 4rem auto;
`;

export const Loading = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #222;
  `;

  return (
    <Container>
      <SyncLoader
        color={'#ffe9af'}
        loading={true}
        css={override}
        size={20}
      />
    </Container>
  );
}

