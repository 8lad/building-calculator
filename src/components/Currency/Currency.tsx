import style from "./Currency.module.scss";

const Currency = () => {
  return (
    <div className={style.root}>
      <span>$ 37.9</span>
      <span>€ 40.2</span>
    </div>
  );
};

export default Currency;
