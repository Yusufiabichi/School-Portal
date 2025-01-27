import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/RegistrationPage"
import ApplicationPage from "./pages/ApplicationPage";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/ApplicationPage" element={<ApplicationPage />} />
      </Routes>
    </Router>
  );
}
