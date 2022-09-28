export interface SingleMaterialType {
  link: string;
  name: string;
}

export const CURRENCY_URL: string =
  " https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
export const DOLLAR_CODE: string = "USD";
export const EURO_CODE: string = "EUR";
export const MATERIAL_TYPES: SingleMaterialType[] = [
  {
    link: "/",
    name: "Усі",
  },
  {
    link: "/primer",
    name: "Грунтовка",
  },
  {
    link: "/putty",
    name: "Шпаклівка",
  },
  {
    link: "/plaster",
    name: "Штукатурка",
  },
  {
    link: "/tile-adhesive",
    name: "Клей для плитки",
  },
  {
    link: "/csm",
    name: "ЦПС",
  },
];
