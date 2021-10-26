import styled from 'styled-components';
import { DEVICES } from '../../constants/DEVICES';

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 1.875rem 0 3rem 0;
  width: 30%;
`;

export const ErrorText = styled.span`
  color: #868686;
  font-size: 1.75rem;
  margin: 2em 0 0.5em 0;
  text-transform: uppercase;

  @media ${DEVICES.laptop} {
    font-size: 2rem;
  }
`;
