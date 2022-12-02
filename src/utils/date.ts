export function getTime(date: Date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getDate(date: Date) {
  return date.toLocaleDateString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const getEndOfDayDate: Date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  23,
  59,
  59,
);

export const getTaskTime = (date: string): string => new Date(date).toLocaleTimeString();
