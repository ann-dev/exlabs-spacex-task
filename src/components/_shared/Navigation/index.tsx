import React from 'react';
import Logo from '../Logo';
import { Button, Wrapper } from './styles';
import { ReactComponent as IconLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as IconRight } from '../../../assets/chevron-right.svg';

type NavigationProps = {
  dataIndex: number;
  dataLength: number;
  onPrev: () => void;
  onNext: () => void;
};

const Navigation = ({
  dataIndex,
  dataLength,
  onPrev,
  onNext,
}: NavigationProps): JSX.Element => {
  return (
    <Wrapper>
      <Button disabled={!(dataIndex > 0)} onClick={onPrev}>
        <IconLeft />
      </Button>
      <Logo />
      <Button disabled={!(dataLength - 1 !== dataIndex)} onClick={onNext}>
        <IconRight />
      </Button>
    </Wrapper>
  );
};

export default Navigation;
