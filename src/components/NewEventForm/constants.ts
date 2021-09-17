import * as Yup from 'yup';
import { EventStatus } from 'src/utils/constants';
import { EVENT_OPTIONS } from '../EventForm/constants';

// Validation for event form
export const eventFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'Event name is too long')
    .required('Event name is required'),
  eventType: Yup.string()
    .oneOf(EVENT_OPTIONS)
    .required('Event type is required'),
  date: Yup.date().required('Event date is required'),
  startTime: Yup.string()
    .required('Start time is required')
    .test(
      'Start Time',
      'Start time cannot be later than end time',
      function (startTime) {
        const startTimeHour = parseInt(
          this.parent.startTime.toString().substring(0, 2)
        );
        const endTimeHour = parseInt(
          this.parent.endTime.toString().substring(0, 2)
        );
        return startTimeHour < endTimeHour;
      }
    ),
  endTime: Yup.string().required('End time is required'),
  description: Yup.string()
    .max(5000, 'Description text is too long')
    .required('Description of event is required'),
  location: Yup.string().max(200, 'Location text is too long'),
  imageUrl: Yup.string().url('URL not valid'),
  eventStatus: Yup.string()
    .oneOf([EventStatus.DRAFT, EventStatus.PUBLISHED])
    .required('Event status is required'),
});