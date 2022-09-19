import style from "./App.module.scss";
import background from "../../assets/images/4.jpg";

function App() {
  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <h1>Builder calculator</h1>
      </div>
    </div>
  );
}

export default App;
