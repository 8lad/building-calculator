import { Link } from "react-router-dom";
import style from "./MenuButton.module.scss";

interface MenuButtonProps {
  title: string;
  pageUrl: string;
  imageUrl: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  pageUrl,
  imageUrl,
}) => {
  return (
    <Link className={style.root} to={pageUrl}>
      <div className={style.title}>{title}</div>
      <div className={style.image}>
        <img src={imageUrl} alt="menu button" />
      </div>
    </Link>
  );
};
