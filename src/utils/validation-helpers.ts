import * as yup from "yup";
import { NUMBER_MORE_THAN_ZERO, REQUIRED_FIELD } from "./validation-constants";

export const getNumberValidationRules = () => {
  return yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .positive(NUMBER_MORE_THAN_ZERO)
    .required(REQUIRED_FIELD);
};

export const getSelectValidationRules = () =>
  yup.string().required(REQUIRED_FIELD);
