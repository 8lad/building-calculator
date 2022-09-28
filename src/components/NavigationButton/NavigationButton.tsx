import { NavLink } from "react-router-dom";
import style from "./NavigationButton.module.scss";

interface NavigationButtonProps {
  name: string;
  link: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  name,
  link,
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${style.root} active` : `${style.root}`
      }
      to={link}
    >
      {name}
    </NavLink>
  );
};
