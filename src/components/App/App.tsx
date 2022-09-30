import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import background from "../../assets/images/background.jpg";
import { Header } from "../Header/Header";
import { MATERIAL_TYPES } from "../../utils/constants";
import { NotFound } from "../../pages/NotFound/NotFound";

export const App: React.FC = () => {
  const allPages = MATERIAL_TYPES.map((route) => (
    <Route key={route.link} path={route.link} element={<h1>{route.name}</h1>} />
  ));

  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${background})` }}
    >
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            {allPages}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
