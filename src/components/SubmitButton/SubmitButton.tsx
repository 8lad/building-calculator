import style from "./SubmitButton.module.scss";

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button type="submit" onClick={onClick} className={style.root}>
      {text}
    </button>
  );
};
