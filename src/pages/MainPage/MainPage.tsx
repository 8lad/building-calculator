import { MenuButton } from "../../components/MenuButton/MenuButton";
import climatIcon from "../../assets/images/icon-menu-climat.svg";
import insideIcon from "../../assets/images/icon-menu-inside.svg";
import outsideIcon from "../../assets/images/icon-menu-outside.svg";
import electricityIcon from "../../assets/images/icon-menu-electricity.svg";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className="base__wrapper">
      <h2 className="secondary__title">
        Розрахунки для будівництва або ремонту.
      </h2>
      <div className={style.inner}>
        <MenuButton
          title="Внутрішні роботи"
          imageUrl={insideIcon}
          pageUrl="/inside"
        />
        <MenuButton
          title="Зовнішні роботи"
          imageUrl={outsideIcon}
          pageUrl="/outside"
        />
        <MenuButton
          title="Електрика"
          imageUrl={electricityIcon}
          pageUrl="/electricity"
        />
        <MenuButton title="Клімат" imageUrl={climatIcon} pageUrl="/climat" />
      </div>
      <div className="base__text">
        Данний застосунок призначений для того, щоб приблизно розрахувати
        витрати матеріалів при будівництві або можливих ремонтних роботах. Це
        допоможе Вам витрати менше часу на підготовку до цих робіт. У переліках
        матеріалів, для зручності, приведені деякі розповсюджені виробники з
        їхною продукцією. Це зроблено не за для реклами, а для Вашої зручності.
        Також нагадуємо що данні, які Ви отримаєте не є остаточними. Для більш
        детальних розрахунків дуже радимо Вам звернутись до фахівців.
        Сподіваємось що данний застосунок допоможе Вам при виконанні робіт.
        Успіхів!
      </div>
    </div>
  );
};
