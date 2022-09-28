import { useState, useEffect } from "react";
import { getCurrentFullDate } from "../../utils/helpers";
import style from "./CurrentDate.module.scss";

export const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentFullDate());

  useEffect(() => {
    const fullDate = setInterval(() => {
      setCurrentDate(getCurrentFullDate());
    }, 30000);
    return () => clearInterval(fullDate);
  }, [currentDate]);

  return <div className={style.root}>{currentDate}</div>;
};
