import { format, parseISO } from 'date-fns';
import locale from 'date-fns/locale/en-US';

export function formatDate(date: string | Date, dateFormat = 'Pp') {
  const parsedDateTime = typeof date === 'string' ? parseISO(date) : date;

  return format(parsedDateTime, dateFormat, { locale });
}
