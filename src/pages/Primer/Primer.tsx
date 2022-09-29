import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import {
  PrimerStateInterface,
  setPrimeOptions,
} from "../../redux/slices/primerSlice";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import style from "./Primer.module.scss";
import { primerProductsGroup } from "../../server/primerProductsGroup";
import {
  getNumberValidationRules,
  getSelectValidationRules,
} from "../../utils/validation-helpers";
import { calculatePrimeCapasity } from "../../utils/helpers";
import { WarningMessageBlock } from "../../components/WarningMessageBlock/WarningMessageBlock";

type FormInputs = {
  workingArea: string;
  layersAmount: string;
  primerProperty: string;
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
  const { primer, workingArea, materialСonsumption } = useSelector(
    (state: RootState) => state.primer,
  );
  const isShowCalculatings = !!primer?.name;
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormInputs> = ({
    workingArea,
    layersAmount,
    primerProperty,
  }) => {
    const convertedPrimerProperty = JSON.parse(primerProperty);
    const materialСonsumption = calculatePrimeCapasity(
      +workingArea,
      +layersAmount,
      +convertedPrimerProperty.value,
    );
    const primerCreatedState: PrimerStateInterface = {
      primer: { ...convertedPrimerProperty },
      layersAmount: +layersAmount,
      workingArea: +workingArea,
      materialСonsumption,
    };
    dispatch(setPrimeOptions(primerCreatedState));
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
      {isShowCalculatings && (
        <div className={style.description}>
          <h3>Результат розрахунків</h3>
          <p>
            Приблизне використання {primer.name} на полщу {workingArea}м
            <sup>2</sup> складає: {materialСonsumption}кг
          </p>
          <p>
            Приблизне використання на 1м<sup>2</sup> складає: {primer?.value}
            кг
          </p>
          <WarningMessageBlock />
        </div>
      )}
    </div>
  );
};
