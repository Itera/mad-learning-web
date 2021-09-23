import React from 'react';

import { MetaInfoGroup, MetaInfoLabel, MetaInfoValue } from './styled';
import { formatDateInterval, formatPersonName } from 'src/utils/formatting';
import { Event } from 'src/types/domain';
import TagLayout from 'src/components/Tag';

type MetaInfoProps = Pick<
  Event,
  'name' | 'startTime' | 'endTime' | 'location' | 'owner' | 'imageUrl' | 'tags'
>;

function MetaInfo({
  name,
  startTime,
  endTime,
  imageUrl,
  location,
  owner,
  tags,
}: MetaInfoProps) {
  return (
    <MetaInfoGroup>
      <MetaInfoLabel>Time</MetaInfoLabel>
      <MetaInfoValue>{formatDateInterval(startTime, endTime)}</MetaInfoValue>
      <MetaInfoLabel>Location</MetaInfoLabel>
      <MetaInfoValue>{location}</MetaInfoValue>
      {owner && (
        <>
          <MetaInfoLabel>Organizer</MetaInfoLabel>
          <MetaInfoValue>{formatPersonName(owner)}</MetaInfoValue>
        </>
      )}
      {tags && (
        <>
          <MetaInfoLabel>Tags</MetaInfoLabel>
          <MetaInfoValue>
            <TagLayout tags={tags} />
          </MetaInfoValue>
        </>
      )}
    </MetaInfoGroup>
  );
}

export default MetaInfo;
