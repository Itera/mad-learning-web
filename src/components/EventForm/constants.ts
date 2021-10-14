import * as Yup from 'yup';
import { EventStatus } from 'src/utils/constants';
import { format, isAfter, isEqual, isBefore } from 'date-fns';

export const EventOptions: string[] = [
  '',
  'Subject matter event',
  'Coding event',
  'Project presentation',
  'Workshop',
];

const parseDate = (date: Date, time: string) =>
  new Date(format(date, 'yyyy-MM-dd') + 'T' + time);

// Validation for event form
export const EVENT_FORM_CHAR_LIMITS = {
  NAME: 100,
  DESCRIPTION: 5000,
  LOCATION: 200,
  IMAGE_ALT: 200,
};

export const EventFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(EVENT_FORM_CHAR_LIMITS.NAME, 'Event name is too long')
    .required('Event name is required'),
  eventType: Yup.string()
    .oneOf(EventOptions)
    .required('Event type is required'),
  date: Yup.date().required('Event date is required'),
  startTime: Yup.string()
    .required('Start time is required')
    .test(
      'Start Time',
      'Start time cannot be equal, or later than End time',
      async (value, context) => {
        const startTime = parseDate(
          context.parent.date,
          context.parent.startTime
        );
        const endTime = parseDate(context.parent.date, context.parent.endTime);

        if (isAfter(startTime, endTime)) return false;
        if (isEqual(startTime, endTime)) return false;
        return true;
      }
    ),
  endTime: Yup.string()
    .required('End time is required')
    .test(
      'End Time',
      'End time cannot be equal, or earlier than Start time',
      async (value, context) => {
        const startTime = parseDate(
          context.parent.date,
          context.parent.startTime
        );
        const endTime = parseDate(context.parent.date, context.parent.endTime);

        if (isBefore(endTime, startTime)) return false;
        if (isEqual(startTime, endTime)) return false;
        return true;
      }
    ),
  description: Yup.string()
    .max(EVENT_FORM_CHAR_LIMITS.DESCRIPTION, 'Description text is too long')
    .required('Description of event is required'),
  location: Yup.string().max(
    EVENT_FORM_CHAR_LIMITS.LOCATION,
    'Location text is too long'
  ),
  teamsUrl: Yup.string()
    .url('URL not valid')
    .matches(/^https:\/\/teams.microsoft.com\/(.*)$/, 'Teams URL not valid'),
  imageUrl: Yup.string().url('Image URL not valid'),
  imageAlt: Yup.string().max(
    EVENT_FORM_CHAR_LIMITS.IMAGE_ALT,
    'Image Alt Text too long'
  ),
  eventStatus: Yup.string()
    .oneOf<EventStatus>(Object.values(EventStatus))
    .required('Event status is required'),
});
