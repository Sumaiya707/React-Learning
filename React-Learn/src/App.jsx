import { Welcome } from "./Welcome";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card";
import { UserProfile } from "./UserProfile";
import { Destructuring } from "./Destructuring";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { CustomButton } from "./CustomButton";
function Button() {
  return <button>Click MEE</button>;
}

function App() {
  return (
    <div>
      <CustomButton />
      <h1>WELCOME TO LEARN !!</h1>
      <Welcome name="ALICEE" age={55} />
      <Welcome name="BOB" age={30} />
      <Button />
      <Hello />
      <Alert> YOUR CHANGING HAS SAVED !!</Alert>
      <Alert type="error"> YOUR CHANGING HAS NOT YET SAVED !!</Alert>
      <Card />
      <ProductList />
      <NameList />
      <UserProfile
        name="Sumaiya"
        age={22}
        isStudent={true}
        skills={["HTML", "CSS", "JavaScript"]}
      />
      <UserCard
        name="JohnDEE"
        age={333}
        city="DHAKA"
        email="bdsuma22@gmail.com"
      />
      <Destructuring name="RIMURU" age={200} isStudent={false} skills={[]} />

      <Greeting name="bruce" message="NOOOO" />
      <Greeting name="bruce" />
      <Greeting message="NOOOO" />
      <Greeting />

      <Card>
        <h2>Student Information</h2>
        <p>Name: Alex</p>
        <p>Age: 22</p>
      </Card>

      <Card>
        <h2>Product Information</h2>
        <p>Product: Laptop</p>
        <p>Price: $500</p>
      </Card>
      <UserDetails name="banana" isOnline={false} />
    </div>
  );
}

export default App;
