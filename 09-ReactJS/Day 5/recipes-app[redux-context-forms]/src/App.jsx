import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import { useState } from "react";
import ThemeContext from "./context/theme";
import CounterContext from "./context/counter";
import RoutesList from "./routes";
import "./App.css";

function App() {
  const [theme, setTheme] = useState('dark');
  const [counter, setCounter] = useState(45);


  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CounterContext value={{ counter , setCounter }}>
          <Header />
          <div className="container my-5">
             <RoutesList />
          </div>
        </CounterContext>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
