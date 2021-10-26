import React from 'react';
import { formatDate } from '../../../utils';
import { Fairings } from '../../../graphql';
import Label from '../../_common/Label';

import {
  Article,
  CtaButton,
  DetailsHeading,
  DetailsText,
  DetailsWrapper,
  Heading,
  HeadingsWrapper,
  MainSection,
  StatusWrapper,
  SubSection,
  Wrapper,
} from './styles';

interface MissionDetailsProps {
  missionName: string;
  launchDate: string;
  fairings: Fairings;
  rocketName: string;
  siteName: string;
}

const MissionDetails = ({
  missionName,
  launchDate,
  fairings,
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
          </HeadingsWrapper>
          <DetailsWrapper>
            <DetailsHeading>Rocket</DetailsHeading>
            <StatusWrapper>
              <DetailsText>{rocketName}</DetailsText>
              <Label status={fairings && fairings.recovered} />
            </StatusWrapper>
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
