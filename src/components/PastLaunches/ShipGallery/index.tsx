import React from 'react';
import { Ship } from '../../../graphql';
import { CardGrid, CategoryHeading, NoResultsText, Wrapper } from './styles';
import Card from '../../_common/Card';

type ShipGalleryProps = {
  data: Ship[];
};

const ShipGallery = ({ data }: ShipGalleryProps): JSX.Element => {
  return (
    <Wrapper>
      <CategoryHeading>Rescue ships</CategoryHeading>
      <CardGrid>
        {data.length > 0 ? (
          data.map((ship) => (
            <Card
              key={ship.id}
              title={ship.name}
              imgSrc={ship.image}
              category_1="Home port "
              category_2="Weight [kg]"
              item_1={ship.home_port}
              item_2={ship.weight_kg}
            />
          ))
        ) : (
          <NoResultsText>No results</NoResultsText>
        )}
      </CardGrid>
    </Wrapper>
  );
};

export default ShipGallery;
