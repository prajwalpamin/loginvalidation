import "./index.css";
import Navbar from "./Navbar";
import Signup from "./Components/Signupform";
import Login from "./Components/Loginform";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
