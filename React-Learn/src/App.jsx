import { Welcome } from "./Welcome";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card";
import { UserProfile } from "./UserProfile";
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
      <UserProfile />
    </div>
  );
}

export default App;
