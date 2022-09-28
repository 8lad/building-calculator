import style from "./NavigationBar.module.scss";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { MATERIAL_TYPES } from "../../utils/constants";

export const NavigationBar: React.FC = () => {
  return (
    <ul className={style.root}>
      {MATERIAL_TYPES.map((link) => (
        <li key={link.name}>
          <NavigationButton name={link.name} link={link.link} />
        </li>
      ))}
    </ul>
  );
};
