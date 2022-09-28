import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { fetchCurrency } from "../../redux/slices/currencySlice";
import { useAppDispatch, RootState } from "../../redux/store";
import { CURRENCY_URL } from "../../utils/constants";
import { cutCurrencyValue } from "../../utils/helpers";
import style from "./Currency.module.scss";

export const Currency = () => {
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
          <div>
            $ {cutCurrencyValue(dollar!.buy)}
            <span className="accent__color"> / </span>
            {cutCurrencyValue(dollar!.sale)}
          </div>
          <div>
            € {cutCurrencyValue(euro!.buy)}
            <span className="accent__color"> / </span>
            {cutCurrencyValue(euro!.sale)}
          </div>
        </>
      )}
      {!!error && <h4>Сервіс тимчасово недоступний</h4>}
    </div>
  );
};
