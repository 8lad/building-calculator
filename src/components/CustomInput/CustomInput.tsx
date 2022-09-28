import style from "./CustomInput.module.scss";

interface CustomInputProps {
  title: string;
  type: string;
  placeholder: string;
  name: string;
  errorMessage: string | undefined;
  step?: number;
  onChange: () => void;
  value: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  title,
  placeholder,
  errorMessage,
  step,
  onChange,
  value,
}) => {
  return (
    <div className={style.root}>
      <label htmlFor={name}>{title}</label>
      <input
        step={step ?? 1}
        id={title}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!!errorMessage && <p>* {errorMessage}</p>}
    </div>
  );
};
