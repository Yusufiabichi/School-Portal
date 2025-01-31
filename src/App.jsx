import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/RegistrationPage"
import ApplyPage from "./pages/ApplyPage";
import ApplicationPage from "./pages/ApplyPage";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/ApplyPage" element={<ApplyPage />} />
        <Route path="/ApplicationPage" element={<ApplicationPage />} />
      </Routes>
    </Router>
  );
}
