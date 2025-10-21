import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageContext from "./context/language";
import Navbar from "./components/Navbar";
import ProductsList from "./pages/ProductsList";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/register-native" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
