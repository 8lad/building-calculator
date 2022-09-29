import { useState } from "react";
import clsx from "clsx";
import { getModifidedYouTubeUrl } from "../../utils/helpers";
import style from "./YouTubeFrame.module.scss";

interface YouTubeFrameProps {
  url: string;
  screenHeight?: number;
  screenWidth?: number;
}

export const YouTubeFrame: React.FC<YouTubeFrameProps> = ({
  url,
  screenHeight = 315,
  screenWidth = 560,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const currentYouTubeUrl = getModifidedYouTubeUrl(url);
  return (
    <div className={style.root}>
      <div className={style.box_header}>
        <h3>Переглянути додаткове відео</h3>{" "}
        <div
          className={clsx(style.button, isVideoOpen && style.button_rotate)}
          onClick={() => setIsVideoOpen((prevState) => !prevState)}
        />
      </div>
      <div className={clsx(style.video, isVideoOpen && style.video_open)}>
        {url ? (
          <iframe
            width={screenWidth}
            height={screenHeight}
            src={currentYouTubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <h4>Вибачте, але наразі відео недоступне</h4>
        )}
      </div>
    </div>
  );
};
