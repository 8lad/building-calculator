import { PrimerProductInterface } from "../../pages/Primer/primerProductsGroup";
import style from "./CustomSelect.module.scss";

interface CustomSelectProps {
  title: string;
  setValue: (arg: PrimerProductInterface | null) => void;
  placeholder: string;
  productsGroup: PrimerProductInterface[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  title,
  setValue,
  placeholder,
  productsGroup,
}) => {
  const setSelectValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const choosenProduct = productsGroup.find(
      (product) => product.value === +event.target.value,
    );
    if (choosenProduct) {
      setValue(choosenProduct);
    } else {
      setValue(null);
    }
  };

  return (
    <div className={style.root}>
      <label htmlFor={title}>{title}</label>
      <select
        name={title}
        id={title}
        placeholder={placeholder}
        onChange={setSelectValue}
      >
        <option value={0}>{placeholder}</option>
        {productsGroup.map((product) => (
          <option key={product.name} value={product.value}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
