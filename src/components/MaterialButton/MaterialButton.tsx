import { Link } from "react-router-dom";
import style from "./MaterialButton.module.scss";

interface MaterialButtonProps {
  pageUrl: string;
  buttonTitle: string;
}

export const MaterialButton: React.FC<MaterialButtonProps> = ({
  pageUrl,
  buttonTitle,
}) => {
  return (
    <Link className={style.root} to={pageUrl}>
      <div className={style.border} />
      <h4 className={style.title}>{buttonTitle}</h4>
    </Link>
  );
};
