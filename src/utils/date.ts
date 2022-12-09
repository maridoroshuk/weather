export const getTime = (date: Date) => date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
});

export const getDate = (date: Date) => date.toLocaleDateString('en-UK', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const getEndOfDayDate: Date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  23,
  59,
  59,
);

export const getLocalTime = (date: string): string => new Date(date).toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});
