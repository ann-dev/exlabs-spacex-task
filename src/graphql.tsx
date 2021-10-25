import { gql } from '@apollo/client';

export type Ship = {
  name: string;
  home_port: string;
  image: string;
  id: string;
  weight_kg: number;
};

export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name: string;
  };
  rocket: {
    rocket_name: string;
  };
  ships: Ship[];
};

export type LaunchData = {
  launchesPast: Launch[];
};

export const PAST_LAUNCHES = gql`
  query GetPastLaunches {
    launchesPast(limit: 15) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
        id
        weight_kg
      }
    }
  }
`;
