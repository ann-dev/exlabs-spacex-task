import React from 'react';
import { LabelText, StatusLabel } from './styles';

type LabelProps = {
  status: boolean;
};

const Label = ({ status }: LabelProps): JSX.Element => {
  return (
    <StatusLabel style={{ backgroundColor: status ? '#6FB46E' : '#BE4E35' }}>
      <LabelText>{status ? 'Recovered' : 'Unrecovered'}</LabelText>
    </StatusLabel>
  );
};

export default Label;
