import { useEffect } from "react";
import { LaunchData } from "../../graphql";
import { formatDate } from "../../utils";
import SpaceXLogo from "../../assets/logo.svg";

interface PastLaunchesProps {
  data: LaunchData;
}

const PastLaunches = ({ data }: PastLaunchesProps) => {
  const launchData = data.launchesPast[0];

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <img src={SpaceXLogo} alt="SpaceX Main Logo" />
      <hr />
      <div>
        <h1>
          Mission: <br /> {launchData.mission_name}
        </h1>
        <p>Launch date: {formatDate(launchData.launch_date_local)}</p>
        <p>Rocket: {launchData.rocket.rocket_name}</p>
        <p>Launch site: {launchData.launch_site.site_name}</p>
        <button>Learn More</button>
      </div>
      <div>
        <hr />
      </div>
      <h2>Rescue ships</h2>
      <ul>
        {launchData.ships.map((ship) => (
          <li key={ship.id}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PastLaunches;
