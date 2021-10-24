import React from 'react';
import { useState } from 'react';
import { LaunchData } from '../../graphql';

import Navigation from '../_common/Navigation';
import SpaceXLogo from '../../assets/logo.svg';
import MissionDetails from './MissionDetails';
import ShipGallery from './ShipGallery';

interface PastLaunchesProps {
  data: LaunchData;
}

const PastLaunches = ({ data }: PastLaunchesProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const launchData = data.launchesPast[currentIndex];

  const showPrevMission = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const showNextMission = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <header>
        <Navigation
          dataLength={data.launchesPast.length}
          dataIndex={currentIndex}
          logoAlt="SpaceX main logo"
          logoSrc={SpaceXLogo}
          onPrev={showPrevMission}
          onNext={showNextMission}
        />
      </header>
      <main>
        <MissionDetails
          missionName={launchData.mission_name}
          launchDate={launchData.launch_date_local}
          rocketName={launchData.rocket.rocket_name}
          siteName={launchData.launch_site.site_name}
        />
        <ShipGallery data={launchData.ships} />
      </main>
    </>
  );
};

export default PastLaunches;
