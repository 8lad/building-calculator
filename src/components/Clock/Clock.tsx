import { useState, useEffect } from "react";
import { returnHours, returnMinutes } from "../../utils/helpers";
import style from "./Clock.module.scss";

const Clock: React.FC = () => {
  const [hours, setHours] = useState<number | string>(returnHours());
  const [minutes, setMinutes] = useState<number | string>(returnMinutes());

  useEffect(() => {
    const currentTime = setInterval(() => {
      setHours(returnHours());
      setMinutes(returnMinutes());
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

export default Clock;
