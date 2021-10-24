import React from 'react';

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
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <h3>{title}</h3>
      <img src={imgSrc} style={{ width: '250px' }} role="presentation" alt="" />
      <hr />
      <div>
        <span>{category_1}</span>
        <span>{item_1}</span>
      </div>
      <div>
        <span>{category_2}</span>
        <span>{item_2}</span>
      </div>
    </div>
  );
};

export default Card;
