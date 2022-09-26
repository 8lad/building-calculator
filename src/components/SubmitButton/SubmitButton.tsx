import style from "./SubmitButton.module.scss";

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={style.root}>
      {text}
    </button>
  );
};

export default SubmitButton;
