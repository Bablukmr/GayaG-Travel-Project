import "./styles.css";
import Home from "./MyPages/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./MyPages/Service";
import About from "./MyPages/About";
import Contact from "./MyPages/Contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <br /> <br /> <br /> <br />
      <Footer />
    </div>
  );
}
