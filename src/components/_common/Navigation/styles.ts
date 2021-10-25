import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
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
  width: 15.5rem;
`;
