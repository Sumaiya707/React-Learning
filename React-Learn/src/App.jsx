import { Welcome } from "./Welcome";
import "./App.css";

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
    </div>
  );
}

export default App;
