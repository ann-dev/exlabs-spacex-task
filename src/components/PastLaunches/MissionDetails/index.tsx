import React from 'react';
import { formatDate } from '../../../utils';

import {
  Article,
  CtaButton,
  DetailsHeading,
  DetailsText,
  DetailsWrapper,
  Heading,
  HeadingsWrapper,
  MainSection,
  SubSection,
  Wrapper,
} from './styles';

interface MissionDetailsProps {
  missionName: string;
  launchDate: string;
  rocketName: string;
  siteName: string;
}

const HelloWorld = <span>Hello World</span>;

const MissionDetails = ({
  missionName,
  launchDate,
  rocketName,
  siteName,
}: MissionDetailsProps): JSX.Element => {
  return (
    <Wrapper>
      <Article>
        <MainSection>
          <HeadingsWrapper>
            <DetailsHeading>Mission</DetailsHeading>
            <Heading>{missionName}</Heading>
            {HelloWorld}
          </HeadingsWrapper>
          <DetailsWrapper>
            <DetailsHeading>Rocket</DetailsHeading>
            <DetailsText>{rocketName}</DetailsText>
          </DetailsWrapper>
          <CtaButton>Learn More</CtaButton>
        </MainSection>
        <SubSection>
          <DetailsWrapper>
            <DetailsHeading>Launch date</DetailsHeading>
            <DetailsText>{formatDate(launchDate)}</DetailsText>
          </DetailsWrapper>
          <DetailsWrapper>
            <DetailsHeading>Launch site</DetailsHeading>
            <DetailsText>{siteName}</DetailsText>
          </DetailsWrapper>
        </SubSection>
      </Article>
    </Wrapper>
  );
};

export default MissionDetails;
