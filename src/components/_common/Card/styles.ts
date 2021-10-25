import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 1.25rem;
  color: black;
  height: 21.25rem;
  overflow: hidden;
  width: 22.5rem;
`;

export const ImageContainer = styled.div`
  height: 12.5rem;
  width: 100%;
`;

export const CoverImage = styled.img`
  height: 12.5rem;
  object-fit: cover;
  object-position: center center;
  width: 22.5rem;
`;

export const DetailsWrapper = styled.div`
  padding: 1.1rem 0.9rem 1.25rem;
`;

export const Title = styled.span`
  color: black;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const Divider = styled.div`
  background-color: #e8e8e8;
  height: 1px;
  margin: 16px 0 14px 0;
  width: 100%;
`;

export const SubTitle = styled.span`
  color: #868686;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const SubText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin-left: 38px;
`;
