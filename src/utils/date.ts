export function getTime(date: Date) {
  return date.toLocaleTimeString('en-UK', {
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
