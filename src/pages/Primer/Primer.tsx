import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { calculatePrimeCapasity } from "../../utils/helpers";
import style from "./Primer.module.scss";
import {
  PrimerProductInterface,
  primerProductsGroup,
} from "./primerProductsGroup";

const Primer = () => {
  const [workingArea, setWorkingArea] = useState<string>("");
  const [numberOfLayers, setNumberOfLayers] = useState<string>("");
  const [primerType, setPrimerType] = useState<PrimerProductInterface | null>(
    null,
  );

  return (
    <div className="base__wrapper">
      <div className={style.root}>
        <h2>Грунтовка</h2>
        <CustomInput
          minValue={1}
          maxValue={5000000}
          title="Площа робочої поверхні м2"
          value={workingArea}
          setValue={setWorkingArea}
          type="number"
          placeholder="Введіть будь ласка полщу поверхні"
        />
        <CustomInput
          minValue={1}
          maxValue={100}
          title="Кількість шарів"
          value={numberOfLayers}
          setValue={setNumberOfLayers}
          type="number"
          placeholder="Введіть будь ласка кількість шарів"
        />
        <CustomSelect
          title="Тип грунтовки"
          placeholder="Оберіть будь ласка тип грунту"
          setValue={setPrimerType}
          productsGroup={primerProductsGroup}
        />
      </div>
      <SubmitButton
        text="Розрахувати"
        onClick={() =>
          console.log(
            calculatePrimeCapasity(
              +workingArea,
              +numberOfLayers,
              primerType!.value,
            ),
          )
        }
      />
    </div>
  );
};

export default Primer;
