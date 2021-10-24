import React from 'react';

type NavigationProps = {
  dataIndex: number;
  dataLength: number;
  logoAlt: string;
  logoSrc: string;
  onPrev: () => void;
  onNext: () => void;
};

const Navigation = ({
  dataIndex,
  dataLength,
  logoAlt,
  logoSrc,
  onPrev,
  onNext,
}: NavigationProps): JSX.Element => {
  return (
    <nav>
      {dataIndex > 0 && <button onClick={onPrev}>Prev</button>}
      <img src={logoSrc} alt={logoAlt ? logoAlt : ''} />
      {dataLength - 1 !== dataIndex && <button onClick={onNext}>Next</button>}
    </nav>
  );
};

export default Navigation;
