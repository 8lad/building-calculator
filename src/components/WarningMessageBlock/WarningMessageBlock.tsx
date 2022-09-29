import { WARNING_BEFOR_USING } from "../../utils/text-constants";
import style from "./WarningMessageBlock.module.scss";

export const WarningMessageBlock = () => {
  return <div className={style.root}>* {WARNING_BEFOR_USING}</div>;
};
