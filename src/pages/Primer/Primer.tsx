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
import { YouTubeFrame } from "../../components/YouTubeFrame/YouTubeFrame";

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
  const { primer, workingArea, material–°onsumption } = useSelector(
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
    const material–°onsumption = calculatePrimeCapasity(
      +workingArea,
      +layersAmount,
      +convertedPrimerProperty.value,
    );
    const primerCreatedState: PrimerStateInterface = {
      primer: { ...convertedPrimerProperty },
      layersAmount: +layersAmount,
      workingArea: +workingArea,
      material–°onsumption,
    };
    dispatch(setPrimeOptions(primerCreatedState));
  };

  return (
    <div className="base__wrapper">
      <form className={style.root} onSubmit={handleSubmit(onSubmit)}>
        <h2>–ď—Ä—É–Ĺ—ā–ĺ–≤–ļ–į</h2>

        <Controller
          control={control}
          name="workingArea"
          render={({ field: { name, onChange, value } }) => (
            <CustomInput
              errorMessage={errors.workingArea?.message}
              value={value}
              onChange={onChange}
              name={name}
              title="–ü–Ľ–ĺ—Č–į —Ä–ĺ–Ī–ĺ—á–ĺ—ó –Ņ–ĺ–≤–Ķ—Ä—Ö–Ĺ—Ė –ľ2"
              type="number"
              placeholder="–í–≤–Ķ–ī—Ė—ā—Ć –Ī—É–ī—Ć –Ľ–į—Ā–ļ–į –Ņ–ĺ–Ľ—Č—É –Ņ–ĺ–≤–Ķ—Ä—Ö–Ĺ—Ė"
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
              title="–ö—Ė–Ľ—Ć–ļ—Ė—Ā—ā—Ć —ą–į—Ä—Ė–≤"
              type="number"
              placeholder="–í–≤–Ķ–ī—Ė—ā—Ć –Ī—É–ī—Ć –Ľ–į—Ā–ļ–į –ļ—Ė–Ľ—Ć–ļ—Ė—Ā—ā—Ć —ą–į—Ä—Ė–≤"
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
              title="–Ę–ł–Ņ –≥—Ä—É–Ĺ—ā–ĺ–≤–ļ–ł"
              placeholder="–ě–Ī–Ķ—Ä—Ė—ā—Ć –Ī—É–ī—Ć –Ľ–į—Ā–ļ–į —ā–ł–Ņ –≥—Ä—É–Ĺ—ā—É"
              options={primerProductsGroup}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <SubmitButton text="–†–ĺ–∑—Ä–į—Ö—É–≤–į—ā–ł" />
      </form>
      {isShowCalculatings && (
        <div className={style.description}>
          <h3>–†–Ķ–∑—É–Ľ—Ć—ā–į—ā —Ä–ĺ–∑—Ä–į—Ö—É–Ĺ–ļ—Ė–≤</h3>
          <p>
            –ü—Ä–ł–Ī–Ľ–ł–∑–Ĺ–Ķ –≤–ł–ļ–ĺ—Ä–ł—Ā—ā–į–Ĺ–Ĺ—Ź {primer.name} –Ĺ–į –Ņ–ĺ–Ľ—Č—É {workingArea}–ľ
            <sup>2</sup> —Ā–ļ–Ľ–į–ī–į—Ē: {material–°onsumption}–ļ–≥
          </p>
          <p>
            –ü—Ä–ł–Ī–Ľ–ł–∑–Ĺ–Ķ –≤–ł–ļ–ĺ—Ä–ł—Ā—ā–į–Ĺ–Ĺ—Ź –Ĺ–į 1–ľ<sup>2</sup> —Ā–ļ–Ľ–į–ī–į—Ē: {primer?.value}
            –ļ–≥
          </p>
          <WarningMessageBlock />
          <YouTubeFrame url="https://youtu.be/y1f_V_v1XPE" />
        </div>
      )}
    </div>
  );
};
