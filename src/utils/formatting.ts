import { format, parseISO, isSameDay } from 'date-fns';
import locale from 'date-fns/locale/en-US';

import { Person } from 'src/types/domain';

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
