import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";
import pageNotFound from "../../assets/images/pageNotFound.png";

export const NotFound: React.FC = () => {
  return (
    <div className="base__wrapper">
      <div className={style.root}>
        <img src={pageNotFound} alt="helmet" />
        <h1>Нажаль такої сторінки немає</h1>
        <Link to="/all">Повернутись на головну </Link>
      </div>
    </div>
  );
};
