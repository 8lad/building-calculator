export interface SingleMaterialType {
  link: string;
  name: string;
}

export const BASE_YOUTUBE_URL = "https://www.youtube.com/embed";

export const CURRENCY_URL: string =
  " https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
export const DOLLAR_CODE: string = "USD";
export const EURO_CODE: string = "EUR";
export const MATERIAL_TYPES: SingleMaterialType[] = [
  {
    link: "/",
    name: "Головна",
  },
  {
    link: "/inside",
    name: "Внутрішні",
  },
  {
    link: "/outside",
    name: "Зовнішні",
  },
  {
    link: "/electricity",
    name: "Електрика",
  },
  {
    link: "/climat",
    name: "Клімат",
  },
];
