//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Positions from './pages/POR';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './component/Header';

function App() {
  return (
    <Container>
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/por" element={<Positions />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
    </Container>
  );
}

export default App;
