import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WebSkills from "./components/WebSkills";
import WebWork from "./components/WebWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/webSkills" element={<WebSkills />} /> */}

        <Route path="/webWork" element={
          <div>
            <WebWork />
            <WebSkills />
          </div>
        } />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
