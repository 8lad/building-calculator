import style from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Clock from "../Clock/Clock";
import CurrentDate from "../CurrentDate/CurrentDate";
import Currency from "../Currency/Currency";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <Currency />
        <div className={style.header__logo}>
          <img src={logo} alt="logo" />
          <h2>Building Calculator</h2>
        </div>
        <div>
          <Clock />
          <CurrentDate />
        </div>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
