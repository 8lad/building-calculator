import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import background from "../../assets/images/background.jpg";
import { Header } from "../Header/Header";
import { NotFound } from "../../pages/NotFound/NotFound";
import { MainPage } from "../../pages/MainPage/MainPage";

export const App: React.FC = () => {
  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${background})` }}
    >
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/inside"
              element={<h2 className="secondary__title">Внутрішні</h2>}
            />
            <Route
              path="/outside"
              element={<h2 className="secondary__title">Зовнішні</h2>}
            />
            <Route
              path="/electricity"
              element={<h2 className="secondary__title">Електрика</h2>}
            />
            <Route
              path="/climat"
              element={<h2 className="secondary__title">Клімат</h2>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
