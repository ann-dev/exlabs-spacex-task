import React from 'react';
import { Ship } from '../../../graphql';
import { CardGrid, CategoryHeading, NoResultsText, Wrapper } from './styles';
import Card from '../../_common/Card';

type ShipGalleryProps = {
  data: Ship[];
};

const DisplayShips = (data: Ship[]) => {
  if (data.length > 0) {
    return data.map((ship) =>
      ship ? (
        <Card
          key={ship.id}
          title={ship.name}
          imgSrc={ship.image}
          category_1="Home port "
          category_2="Weight [kg]"
          item_1={ship.home_port}
          item_2={ship.weight_kg}
        />
      ) : (
        ''
      ),
    );
  } else {
    return <NoResultsText>No results</NoResultsText>;
  }
};

const ShipGallery = ({ data }: ShipGalleryProps): JSX.Element => {
  return (
    <Wrapper>
      <CategoryHeading>Rescue ships</CategoryHeading>
      <CardGrid>{DisplayShips(data)}</CardGrid>
    </Wrapper>
  );
};

export default ShipGallery;
