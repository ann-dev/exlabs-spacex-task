import React from 'react';
import { AtomSpinner } from 'react-epic-spinners';
import { LoadingText, Wrapper } from './styles';

const LoadingSpinner = (): JSX.Element => {
  return (
    <Wrapper>
      <AtomSpinner color="white" size={120} />
      <LoadingText>Loading...</LoadingText>
    </Wrapper>
  );
};

export default LoadingSpinner;
