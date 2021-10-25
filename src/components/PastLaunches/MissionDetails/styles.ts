import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';

export const Wrapper = styled.section`
  border-bottom: 1px solid #868686;
  border-top: 1px solid #868686;
  margin-top: 1.9rem;
  padding: 1.1rem 1rem 1.7rem 1rem;

  @media ${DEVICES.laptop} {
    margin-top: 2.75rem;
    padding: 2.25rem 0 2.5rem 0;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${DEVICES.tablet} {
    flex-direction: row;
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  text-align: left;

  @media ${DEVICES.laptop} {
    height: 14rem;
  }
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 7rem;
  justify-content: space-between;
  margin-top: 1.7rem;

  @media ${DEVICES.laptop} {
    height: 7.5rem;
    margin-top: 0;
    text-align: right;
  }
`;

export const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media ${DEVICES.laptop} {
    height: 5rem;
    margin: 0;
  }
`;

export const DetailsHeading = styled.span`
  color: #868686;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.2rem;
  text-transform: uppercase;

  @media ${DEVICES.laptop} {
    font-size: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2.125rem;

  @media ${DEVICES.laptop} {
    font-size: 2.625rem;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.8rem;
  justify-content: space-between;

  @media ${DEVICES.laptop} {
    height: 3rem;
  }
`;

export const DetailsText = styled.p`
  font-size: 1rem;
  font-weight: 500;

  @media ${DEVICES.laptop} {
    font-size: 1.125rem;
  }
`;

export const CtaButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  height: 3.375rem;
  margin-top: 1.875rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
  @media ${DEVICES.tablet} {
    width: 15rem;
  }
  @media ${DEVICES.laptop} {
    margin: 0;
    width: 10rem;
  }
`;
