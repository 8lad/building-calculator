export function returnHours(): number | string {
  const hours = new Date().getHours();
  return hours < 10 ? `0${hours}` : hours;
}

export function returnMinutes(): number | string {
  const minutes = new Date().getMinutes();
  return minutes < 10 ? `0${minutes}` : minutes;
}

export function returnDate(): number | string {
  const date = new Date().getDate();
  return date < 10 ? `0${date}` : date;
}

export function returnMonth(): string | number {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
}

export function returnYear(): number {
  return new Date().getFullYear();
}

export function returnFullDate(): string {
  return `${returnDate()}.${returnMonth()}.${returnYear()}`;
}
