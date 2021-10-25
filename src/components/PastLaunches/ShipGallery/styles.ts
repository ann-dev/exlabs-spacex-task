import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 36px;
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
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(3, 22.5rem);
  margin-top: 1.1rem;
`;

export const NoResultsText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;
