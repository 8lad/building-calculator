import style from "./MaterialButtonsContainer.module.scss";

interface MaterialButtonsContainerProps {
  children: React.ReactNode;
}

export const MaterialButtonsContainer: React.FC<
  MaterialButtonsContainerProps
> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};
