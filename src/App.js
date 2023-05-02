import "./App.css";
import HomePage from "./components/homePage/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GallleryPage from "./components/galleryPage/GallleryPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/gallery" element={<GallleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
