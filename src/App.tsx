import "./App.css";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Oscar>
        <Heading>Hello world 1</Heading>
      </Oscar>
    </div>
  );
}

export default App;
