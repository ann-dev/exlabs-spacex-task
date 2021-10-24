import React from 'react';
import { formatDate } from '../../../utils';

interface MissionDetailsProps {
  missionName: string;
  launchDate: string;
  rocketName: string;
  siteName: string;
}

const MissionDetails = ({
  missionName,
  launchDate,
  rocketName,
  siteName,
}: MissionDetailsProps): JSX.Element => {
  return (
    <section>
      <hr />
      <article>
        <h1>
          Mission: <br /> {missionName}
        </h1>
        <p>Launch date: {formatDate(launchDate)}</p>
        <p>Rocket: {rocketName}</p>
        <p>Launch site: {siteName}</p>
        <button>Learn More</button>
      </article>
    </section>
  );
};

export default MissionDetails;
