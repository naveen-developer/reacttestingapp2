import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="parenddiv">
        <div className="childdiv">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
