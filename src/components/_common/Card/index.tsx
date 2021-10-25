import React from 'react';

import {
  CoverImage,
  DetailsWrapper,
  Divider,
  ImageContainer,
  SubText,
  SubTitle,
  Title,
  Wrapper,
} from './styles';

type CardProps = {
  title: string;
  imgSrc: string;
  category_1: string;
  category_2: string;
  item_1: string;
  item_2: number;
};

const Card = ({
  title,
  imgSrc,
  category_1,
  item_1,
  category_2,
  item_2,
}: CardProps): JSX.Element => {
  return (
    <Wrapper>
      <ImageContainer>
        <CoverImage src={imgSrc} role="presentation" alt="" />
      </ImageContainer>
      <DetailsWrapper>
        <Title>{title}</Title>
        <Divider />
        <div>
          <SubTitle>{category_1}</SubTitle>
          <SubText>{item_1 || 'Unknown'}</SubText>
        </div>
        <div>
          <SubTitle>{category_2}</SubTitle>
          <SubText>{item_2 || 'Unknown'}</SubText>
        </div>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default Card;
