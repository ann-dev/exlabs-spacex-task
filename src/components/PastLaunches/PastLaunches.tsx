import React from 'react';
import { useState } from 'react';

import { LaunchData } from '../../graphql';
import { Wrapper } from './styles';
import Navigation from '../_shared/Navigation';
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
    <Wrapper>
      <header>
        <Navigation
          dataLength={data.launchesPast.length}
          dataIndex={currentIndex}
          onPrev={showPrevMission}
          onNext={showNextMission}
        />
      </header>
      <main>
        <MissionDetails
          missionName={launchData.mission_name}
          launchDate={launchData.launch_date_local}
          rocketName={launchData.rocket.rocket_name}
          fairings={launchData.rocket.fairings}
          siteName={launchData.launch_site.site_name}
          siteName_Long={launchData.launch_site.site_name_long}
        />
        <ShipGallery data={launchData.ships} />
      </main>
    </Wrapper>
  );
};

export default PastLaunches;
