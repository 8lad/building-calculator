import style from "./CustomInput.module.scss";

interface CustomInputProps {
  title: string;
  type: string;
  value: string;
  maxValue: number;
  minValue: number;
  setValue: (arg: string) => void;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  setValue,
  title,
  maxValue,
  minValue,
  placeholder,
}) => {
  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <label htmlFor={title}>{title}</label>
      <input
        min={minValue}
        max={maxValue}
        name={title}
        id={title}
        type={type}
        value={value}
        onChange={setInputValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
