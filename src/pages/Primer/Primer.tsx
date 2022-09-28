import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import style from "./Primer.module.scss";
import { primerProductsGroup } from "../../server/primerProductsGroup";
import { WARNING_BEFOR_USING } from "../../utils/text-constants";
import {
  getNumberValidationRules,
  getSelectValidationRules,
} from "../../utils/validation-helpers";

type FormInputs = {
  workingArea: string;
  layersAmount: string;
  primerProperty: string | null;
};

const schema = yup
  .object({
    workingArea: getNumberValidationRules(),
    layersAmount: getNumberValidationRules(),
    primerProperty: getSelectValidationRules(),
  })
  .required();

const defaultValues = {
  workingArea: "",
  layersAmount: "",
  primerProperty: "",
};

export const Primer = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    return data;
  };

  return (
    <div className="base__wrapper">
      <form className={style.root} onSubmit={handleSubmit(onSubmit)}>
        <h2>Грунтовка</h2>

        <Controller
          control={control}
          name="workingArea"
          render={({ field: { name, onChange, value } }) => (
            <CustomInput
              errorMessage={errors.workingArea?.message}
              value={value}
              onChange={onChange}
              name={name}
              title="Площа робочої поверхні м2"
              type="number"
              placeholder="Введіть будь ласка полщу поверхні"
              step={0.5}
            />
          )}
        />
        <Controller
          control={control}
          name="layersAmount"
          render={({ field: { name, onChange, value } }) => (
            <CustomInput
              errorMessage={errors.layersAmount?.message}
              name={name}
              onChange={onChange}
              value={value}
              title="Кількість шарів"
              type="number"
              placeholder="Введіть будь ласка кількість шарів"
            />
          )}
        />
        <Controller
          control={control}
          name="primerProperty"
          render={({ field: { name, onChange, value } }) => (
            <CustomSelect
              errorMessage={errors.primerProperty?.message}
              name={name}
              title="Тип грунтовки"
              placeholder="Оберіть будь ласка тип грунту"
              options={primerProductsGroup}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <SubmitButton text="Розрахувати" />
      </form>
      <div className={style.description}>
        <h3>Результат розрахунків</h3>
        <p>Приблизне використання на полщу складає: кг</p>
        <p>
          Приблизне використання на 1м<sup>2</sup> складає: кг
        </p>
        <span>* {WARNING_BEFOR_USING}</span>
      </div>
    </div>
  );
};
