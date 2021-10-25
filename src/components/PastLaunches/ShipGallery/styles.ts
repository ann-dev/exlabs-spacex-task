import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';

export const Wrapper = styled.section`
  margin-top: 2.25rem;
  padding: 0 1rem 0 1rem;

  @media ${DEVICES.laptop} {
    padding: 0;
  }
`;

export const CategoryHeading = styled.span`
  color: #868686;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.2rem;
  text-transform: uppercase;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-auto-rows: minmax(0, 21.25rem);
  grid-gap: 1.25rem;
  grid-template-columns: repeat(1, calc(100vw - 2rem));
  margin-top: 1.1rem;

  @media ${DEVICES.tablet} {
    grid-template-columns: repeat(2, calc(50vw - 1.75rem));
  }
  @media ${DEVICES.laptop} {
    grid-column-gap: 1.875rem;
    grid-gap: 1.875rem;
    grid-template-columns: repeat(3, 22.5rem);
  }
`;

export const NoResultsText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;
