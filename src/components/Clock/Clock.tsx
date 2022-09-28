import { useState, useEffect } from "react";
import { getCurrentHours, getCurrentMinutes } from "../../utils/helpers";
import style from "./Clock.module.scss";

export const Clock: React.FC = () => {
  const [hours, setHours] = useState<number | string>(getCurrentHours());
  const [minutes, setMinutes] = useState<number | string>(getCurrentMinutes());

  useEffect(() => {
    const currentTime = setInterval(() => {
      setHours(getCurrentHours());
      setMinutes(getCurrentMinutes());
    }, 100);
    return () => clearInterval(currentTime);
  }, [hours, minutes]);

  return (
    <div className={style.root}>
      {hours}
      <span className={style.dots}>:</span>
      {minutes}
    </div>
  );
};
