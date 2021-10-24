import React from 'react';
import { useQuery } from '@apollo/client';
import { LaunchData, PAST_LAUNCHES } from '../../graphql';
import PastLaunches from './PastLaunches';

const PastLaunchesContainer = (): JSX.Element => {
  const { loading, error, data } = useQuery<LaunchData>(PAST_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>An error has occured</p>;

  return <PastLaunches data={data} />;
};
export default PastLaunchesContainer;
