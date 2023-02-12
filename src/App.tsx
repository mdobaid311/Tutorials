import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import LoggedIn from "./components/LoggedIn";
import ObjectState from "./components/ObjectState";
import Oscar from "./components/Oscar";
import Private from "./components/Private";
import Profile from "./components/Profile";
import Counter from "./components/class/Counter";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
