import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

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
  siteName_Long: string;
}

const MissionDetails = ({
  missionName,
  launchDate,
  fairings,
  rocketName,
  siteName,
  siteName_Long,
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
            <Tippy
              content={siteName_Long}
              arrow={false}
              placement="bottom-start"
              theme="light"
            >
              <DetailsText>{siteName}</DetailsText>
            </Tippy>
          </DetailsWrapper>
        </SubSection>
      </Article>
    </Wrapper>
  );
};

export default MissionDetails;
