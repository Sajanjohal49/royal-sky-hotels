import "./App.css";
import HomePage from "./components/homePage/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GallleryPage from "./components/galleryPage/GallleryPage";
import Footer from "./components/footer/Footer";
import AllHotelsPage from "./components/allHotelsPage/AllHotelsPage";
import LoginPage from "./components/login/LoginPage";
import UserRegister from "./components/register/UserRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/gallery" element={<GallleryPage />} />

        <Route path="/allHotels" element={<AllHotelsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/register" element={<UserRegister />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
