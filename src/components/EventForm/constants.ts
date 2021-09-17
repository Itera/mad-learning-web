import * as Yup from 'yup';
import { EventStatus } from 'src/utils/constants';

export const EventOptions: string[] = [
  '',
  'Subject matter event',
  'Coding event',
  'Project presentation',
  'Workshop',
];

// Validation for event form
export const EventFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'Event name is too long')
    .required('Event name is required'),
  eventType: Yup.string()
    .oneOf(EventOptions)
    .required('Event type is required'),
  date: Yup.date().required('Event date is required'),
  startTime: Yup.string()
    .required('Start time is required')
    .test("Start Time", "Start time cannot be equal, or later than End time", async (value, context) => {
      const startTimeHour = parseInt(context.parent.startTime.substring(0, 2));
      const endTimeHour = parseInt(context.parent.endTime.substring(0, 2));
      const startTimeMinute = parseInt(context.parent.startTime.substring(3, 5));
      const endTimeMinute = parseInt(context.parent.endTime.toString().substring(3, 5));
      if (startTimeHour == endTimeHour && endTimeMinute < startTimeMinute) {
        return false;
      }
      if (startTimeHour > endTimeHour) {
        return false;
      }
      if (startTimeHour == endTimeHour && startTimeMinute == endTimeMinute) {
        return false;
      }

      return true;
    }),
  endTime: Yup.string()
    .required('End time is required')
    .test("End Time", "End time cannot be equal, or earlier than Start time", async (value, context) => {
      const startTimeHour = parseInt(context.parent.startTime.substring(0, 2));
      const endTimeHour = parseInt(context.parent.endTime.substring(0, 2));
      const startTimeMinute = parseInt(context.parent.startTime.substring(3, 5));
      const endTimeMinute = parseInt(context.parent.endTime.toString().substring(3, 5));
      if (startTimeHour == endTimeHour && endTimeMinute < startTimeMinute) {
        return false;
      }
      if (startTimeHour > endTimeHour) {
        return false;
      }
      if (startTimeHour == endTimeHour && startTimeMinute == endTimeMinute) {
        return false;
      }
      return true;
    }),
  description: Yup.string()
    .max(5000, 'Description text is too long')
    .required('Description of event is required'),
  location: Yup.string().max(200, 'Location text is too long'),
  imageUrl: Yup.string().url('URL not valid'),
  eventStatus: Yup.string()
    .oneOf([EventStatus.DRAFT, EventStatus.PUBLISHED])
    .required('Event status is required'),
});

