import { Welcome } from "./Welcome";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card";
function Button() {
  return <button>Click MEE</button>;
}
function App() {
  // PARENT
  return (
    <div>
      <h1>WELCOME TO LEARN !!</h1>
      <Welcome />
      <Button />
      <Hello />
      <Card />
    </div>
  );
}

export default App;
