import { format, parseISO, isSameDay } from 'date-fns';
import locale from 'date-fns/locale/en-US';

import { Person } from 'src/types/domain';

export const formatLongPublishDateString = function (
  dateString: string
): string {
  const date = new Date(dateString);
  return `${date.toLocaleDateString('nb-NO')} at ${date.toLocaleTimeString(
    'nb-NO'
  )}`;
};

export const formatPublishDateString = function (dateString: string): string {
  const date = new Date(dateString);
  const todaysDate = new Date();
  const differenceMilliSeconds = todaysDate.getTime() - date.getTime();

  const oneHourMilliSeconds = 1000 * 60 * 60;
  const oneMinuteMilliSeconds = 1000 * 60;
  const oneDayMilliSeconds = 1000 * 24 * 60 * 60;

  const daysDifference = Math.floor(
    differenceMilliSeconds / oneDayMilliSeconds
  );
  const hoursDifference = Math.floor(
    differenceMilliSeconds / oneHourMilliSeconds
  );
  const minutesDifference = Math.floor(
    differenceMilliSeconds / oneMinuteMilliSeconds
  );

  if (daysDifference === 0 && hoursDifference === 0) {
    if (minutesDifference < 1) {
      return 'Just now';
    }
    return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference === 0 && hoursDifference <= 3) {
    return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
  } else if (daysDifference === 0 && date.getDay() === todaysDate.getDay()) {
    return `Today at ${date.toLocaleTimeString('nb-NO')}`;
  } else if (daysDifference === 1) {
    return `Yesterday at ${date.toLocaleTimeString('nb-NO')}`;
  }

  return formatLongPublishDateString(dateString);
};

export function formatDate(date: string | Date, dateFormat = 'Pp'): string {
  const parsedDateTime = typeof date === 'string' ? parseISO(date) : date;

  return format(parsedDateTime, dateFormat, { locale });
}

export function formatDateInterval(
  startDate: string | Date,
  endDate: string | Date
): string {
  const parsedStartDate =
    typeof startDate === 'string' ? parseISO(startDate) : startDate;
  const parsedEndDate =
    typeof endDate === 'string' ? parseISO(endDate) : endDate;

  if (isSameDay(parsedStartDate, parsedEndDate)) {
    return `${formatDate(parsedStartDate, 'MMMM d - HH:mm')}–${formatDate(
      parsedEndDate,
      'HH:mm'
    )}`;
  }
  return `${formatDate(parsedStartDate, 'MMMM d HH:mm')}–${formatDate(
    parsedEndDate,
    'MMMM d HH:mm'
  )}`;
}

export function formatPersonName({ firstName, lastName }: Person): string {
  return `${firstName} ${lastName}`;
}
