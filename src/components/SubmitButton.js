import React from 'react';
import {BtnWrapper, UploadButton, Points} from '../styles/common/button';

export const SubmitButton = ({onSubmit, heroId, upLoading, availablePoints, profile}) => (
  <BtnWrapper>
    <Points>剩餘點數：{availablePoints}</Points>
    <UploadButton onClick={()=>onSubmit(heroId, profile)} disabled={upLoading || availablePoints > 0}>
      {upLoading ? "Saving" : "儲存"}
    </UploadButton>
  </BtnWrapper>
)



