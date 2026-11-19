import { Ceremony } from '../content/invitation';

function formatDateToICS(isoString: string): string {
  const date = new Date(isoString);
  return date.toISOString().replace(/-|:|\.\d+/g, '');
}

export function generateICS(ceremony: Ceremony, coupleName: string = 'Rohan & Sakshi'): void {
  const start = formatDateToICS(ceremony.calendarStartDate);
  const end = formatDateToICS(ceremony.calendarEndDate);
  const title = `${coupleName}'s Wedding - ${ceremony.title}`;
  const description = `Join us in celebration for ${ceremony.title} at ${ceremony.venue}. Date & Time: ${ceremony.date}, ${ceremony.time}.`;

  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rohan & Sakshi Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${ceremony.id}-${Date.now()}@rohansakshi.wedding`,
    `DTSTAMP:${formatDateToICS(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${ceremony.venue}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${ceremony.id}-ceremony.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(ceremony: Ceremony, coupleName: string = 'Rohan & Sakshi'): string {
  const start = formatDateToICS(ceremony.calendarStartDate);
  const end = formatDateToICS(ceremony.calendarEndDate);
  const title = encodeURIComponent(`${coupleName}'s Wedding - ${ceremony.title}`);
  const location = encodeURIComponent(ceremony.venue);
  const details = encodeURIComponent(
    `Come celebrate ${coupleName}'s wedding (${ceremony.title}). Venue: ${ceremony.venue}. Time: ${ceremony.time}.`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}&details=${details}`;
}
