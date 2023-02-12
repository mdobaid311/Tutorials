import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Input handlerChange={(event) => console.log(event)} />
      <Container styles={{ padding: 10, display: "flex" }} />
    </div>
  );
}

export default App;
