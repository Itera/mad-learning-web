import { Event } from 'src/types/domain';
import { EVENT_STATUS_OPTIONS } from 'src/utils/constants';

export const event: Event = {
  id: '0',
  name: 'Kodekveld',
  description: 'Hacking i fellesskap.',
  startTime: '2020-09-22T16:30:00+01',
  endTime: '2020-09-22T17:30:00+01',
  location: 'Jernlageret',
  eventType: 'Subject matter event',
  eventStatus: EVENT_STATUS_OPTIONS.Published,
  teamsUrl: 'https://teams.microsoft.com',
  imageUrl:
    'https://itera-cdn.azureedge.net/contentassets/df1f34b7803045fa95ffd4529826f2b2/kristian-redi-2.jpg?quality=60&Cache=Always&width=1148&mode=crop&scale=both',
  imageAlt: 'Bilde av folk som programmerer i fellesskap.',
  owner: {
    id: '0',
    firstName: 'Lars Erik',
    lastName: 'Røise',
    email: 'larse.erik.roise@itera.no',
  },
  participants: [
    {
      id: '1',
      firstName: 'Tin Anh',
      lastName: 'Nguyen',
      email: 'tin.anh.nguyen@itera.no',
    },
    {
      id: '2',
      firstName: 'Martin',
      lastName: 'Onstad',
      email: 'martin.onstad@itera.no',
    },
    {
      id: '3',
      firstName: 'Martin',
      lastName: 'Othamar',
      email: 'martin.othamar@itera.no',
    },
  ],
};

export const events = generateMockEvents(5);

function generateMockEvents(amount: number): Array<Event> {
  const mockEvents = [];
  for (let i = 0; i < amount; i++) {
    mockEvents.push({
      ...event,
      id: `${i}`,
    });
  }
  return mockEvents;
}
