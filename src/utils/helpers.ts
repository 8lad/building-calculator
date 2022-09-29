import { BASE_YOUTUBE_URL } from "./constants";

export function getCurrentHours(): number | string {
  const hours = new Date().getHours();
  return hours < 10 ? `0${hours}` : hours;
}

export function getCurrentMinutes(): number | string {
  const minutes = new Date().getMinutes();
  return minutes < 10 ? `0${minutes}` : minutes;
}

export function getCurrentDate(): number | string {
  const date = new Date().getDate();
  return date < 10 ? `0${date}` : date;
}

export function getCurrentMonth(): string | number {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getCurrentFullDate(): string {
  return `${getCurrentDate()}.${getCurrentMonth()}.${getCurrentYear()}`;
}

export function returnErrorText(e: Error): string {
  const error = e;
  return error.message;
}

export function cutCurrencyValue(currency: string): string {
  return currency.replace(/\.(\d{1,2}).*$/, ".$1");
}

export function calculatePrimeCapasity(
  workingArea: number,
  layerAmount: number,
  primeIndex: number,
): number {
  const calculateResult = workingArea * layerAmount * primeIndex;
  return Number(calculateResult.toFixed(3));
}

export function getModifidedYouTubeUrl(url: string): string {
  const urlMatchingSchema = /\/[a-zA-Z,0-9,_!@#$%^&*]*$/gm;
  const modifiedUrl = BASE_YOUTUBE_URL + url.match(urlMatchingSchema);
  return modifiedUrl;
}
