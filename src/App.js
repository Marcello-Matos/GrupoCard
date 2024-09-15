import './App.css';
import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/Sobre";
import Work from './Components/Work';
import Testimonial from './Components/Testemonial';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Work/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
