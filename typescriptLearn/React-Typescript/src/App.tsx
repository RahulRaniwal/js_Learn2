import "./App.css";
import Input from "./Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
function App() {
  const personName = {
    first: "Rahul",
    last: "Raniwal",
  };
  const nameList = [
    {
      first: "Rahul",
      last: "Raniwal",
    },
    {
      first: "Piyush",
      last: "Kumar",
    },
    {
      first: "Rudrendru",
      last: "Rahul",
    },
  ];
  return (
    <>
      {/* <Greet name="Rahul" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Some random text</Heading>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      /> */}
      {/* <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "10px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn />
      <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;
