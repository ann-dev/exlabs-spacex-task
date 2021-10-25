import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  @media ${DEVICES.laptop} {
    padding: 0;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.disabled ? '#5C5C5D' : 'white')};
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 12.5rem;
  @media ${DEVICES.laptop} {
    width: 18.75rem;
  }
`;
