import React from 'react';
import { Button, Logo, Wrapper } from './styles';
import { ReactComponent as IconLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as IconRight } from '../../../assets/chevron-right.svg';

type NavigationProps = {
  dataIndex: number;
  dataLength: number;
  logoAlt: string;
  logoSrc: string;
  onPrev: () => void;
  onNext: () => void;
};

const Navigation = ({
  dataIndex,
  dataLength,
  logoAlt,
  logoSrc,
  onPrev,
  onNext,
}: NavigationProps): JSX.Element => {
  return (
    <Wrapper>
      <Button disabled={!(dataIndex > 0)} onClick={onPrev}>
        <IconLeft />
      </Button>
      <Logo src={logoSrc} alt={logoAlt ? logoAlt : ''} />
      <Button disabled={!(dataLength - 1 !== dataIndex)} onClick={onNext}>
        <IconRight />
      </Button>
    </Wrapper>
  );
};

export default Navigation;
