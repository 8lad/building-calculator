import style from "./App.module.scss";
import background from "../../assets/images/4.jpg";
import Header from "../Header/Header";

const App: React.FC = () => {
  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      {/* <div className="container">
       
      </div> */}
    </div>
  );
};

export default App;
