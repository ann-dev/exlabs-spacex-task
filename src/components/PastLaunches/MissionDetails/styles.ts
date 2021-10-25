import styled from 'styled-components';

export const Wrapper = styled.section`
  border-bottom: 1px solid #868686;
  border-top: 1px solid #868686;
  margin-top: 2.75rem;
  padding: 36px 0 40px 0;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: space-between;
  text-align: left;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 7.5rem;
  justify-content: space-between;
  text-align: right;
`;

export const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;
`;

export const DetailsHeading = styled.span`
  color: #868686;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.2rem;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  font-size: 2.625rem;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-between;
`;

export const DetailsText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const CtaButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  height: 3.375rem;
  text-transform: uppercase;
  width: 10rem;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`;
