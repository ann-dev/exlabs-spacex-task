import React from 'react';
import Logo from '../_shared/Logo';
import { ErrorText, Wrapper } from './styles';

const ErrorPage = (): JSX.Element => {
  return (
    <Wrapper>
      <Logo />
      <ErrorText>An error has occured</ErrorText>
      <p>Please try refreshing the page in a while.</p>
    </Wrapper>
  );
};

export default ErrorPage;
