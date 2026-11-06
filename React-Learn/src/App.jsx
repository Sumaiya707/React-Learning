import { Welcome } from "./Welcome";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card";
import { UserProfile } from "./UserProfile";

function Button() {
  return <button>Click MEE</button>;
}

function App() {
  return (
    <div>
      <h1>WELCOME TO LEARN !!</h1>
      <Welcome name="ALICEE" age={55} />
      <Welcome name="BOB" age={30} />
      <Button />
      <Hello />
      <Card />
      <UserProfile
        name="Sumaiya"
        age={22}
        isStudent={true}
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </div>
  );
}

export default App;
