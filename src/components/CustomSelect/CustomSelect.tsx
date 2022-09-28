import { PrimerProductInterface } from "../../server/primerProductsGroup";
import style from "./CustomSelect.module.scss";

interface CustomSelectProps {
  name: string;
  title: string;
  placeholder: string;
  options: PrimerProductInterface[];
  value: string;
  onChange: () => void;
  errorMessage: string | undefined;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  title,
  name,
  placeholder,
  options,
  value,
  onChange,
  errorMessage,
}) => {
  const arrayOfHtmlOptions = options.map((product) => (
    <option key={product.name} value={JSON.stringify(product)}>
      {product.name}
    </option>
  ));

  return (
    <div className={style.root}>
      <label htmlFor={name}>{title}</label>
      <select
        name={name}
        id={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {arrayOfHtmlOptions}
      </select>
      {!!errorMessage && <p>* {errorMessage}</p>}
    </div>
  );
};
