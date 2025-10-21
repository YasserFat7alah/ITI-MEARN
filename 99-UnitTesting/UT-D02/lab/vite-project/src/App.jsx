
import "./App.css";
import UserProfile from "./components/UserProfile";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <UserProfile user={{ name: "yasser", age: 25 }} />
      <Toggle />
    </>
  );
}

export default App;
