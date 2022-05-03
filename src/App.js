import "./App.css";
import data from "./data";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="parenddiv">
        <div className="childdiv">
          {data.map((values, index) => {
            return <Post key={index} values={values} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
