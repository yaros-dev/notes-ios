import IndexedDB from "../../api/IndexedDB";
import Main from "../main/Main";
import background from "../../assets/mac-os.jpg";
import "./app.scss";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Main />
    </div>
  );
}

export default App;
