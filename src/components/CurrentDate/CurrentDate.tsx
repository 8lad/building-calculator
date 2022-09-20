import { useState, useEffect } from "react";
import { returnFullDate } from "../../utils/helpers";
import style from "./CurrentDate.module.scss";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(returnFullDate());

  useEffect(() => {
    const fullDate = setInterval(() => {
      setCurrentDate(returnFullDate());
    }, 30000);
    return () => clearInterval(fullDate);
  }, [currentDate]);

  return <div className={style.root}>{currentDate}</div>;
};

export default CurrentDate;
