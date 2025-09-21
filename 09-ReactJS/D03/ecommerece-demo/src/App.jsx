import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar";
import ProductView from "./pages/ProductView";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
