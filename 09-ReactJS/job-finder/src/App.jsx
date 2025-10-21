import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
