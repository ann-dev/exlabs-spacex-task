import styled from 'styled-components';
import { DEVICES } from '../../constants/DEVICES';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 1.875rem 0 3rem 0;

  @media ${DEVICES.laptop} {
    max-width: 71.25rem;
    padding: 4rem 0 6rem 0;
  }
`;
