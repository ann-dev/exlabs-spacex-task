import React from 'react';
import styled from 'styled-components';
import SpaceXLogo from '../../../assets/logo.svg';
import { DEVICES } from '../../../constants/DEVICES';

const LogoWrapper = styled.img`
  width: 12.5rem;
  @media ${DEVICES.laptop} {
    width: 18.75rem;
  }
`;

const Logo = (): JSX.Element => {
  return <LogoWrapper src={SpaceXLogo} alt="" role="presentation" />;
};

export default Logo;
