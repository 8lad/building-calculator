import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { fetchCurrency } from "../../redux/slices/currencySlice";
import { useAppDispatch, RootState } from "../../redux/store";
import { CURRENCY_URL } from "../../utils/constants";
import { cutCurrencyValue } from "../../utils/helpers";
import style from "./Currency.module.scss";

const Currency = () => {
  const dispatch = useAppDispatch();
  const { dollar, euro, isLoading, error } = useSelector(
    (state: RootState) => state.currency,
  );
  const isShowCurrency = !isLoading && !error;

  useEffect(() => {
    dispatch(fetchCurrency(CURRENCY_URL));
  }, []);
  return (
    <div className={style.root}>
      {isLoading && (
        <Triangle
          height="40"
          width="40"
          color="#ffffffde"
          ariaLabel="triangle-loading"
          wrapperClass={style.loader}
        />
      )}
      {isShowCurrency && (
        <>
          <span>
            $ {cutCurrencyValue(dollar!.buy)} / {cutCurrencyValue(dollar!.sale)}
          </span>
          <span>
            € {cutCurrencyValue(euro!.buy)} / {cutCurrencyValue(euro!.sale)}
          </span>
        </>
      )}
      {!!error && <h4>Сервис недоступен</h4>}
    </div>
  );
};

export default Currency;
