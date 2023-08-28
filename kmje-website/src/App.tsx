import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header';  // adjust the import to your file structure
import Home from '../src/components/Home/Home';      // adjust the import to your file structure
import About from '../src/components/About/About';    // adjust the import to your file structure
import Contact from '../src/components/Contact/Contact';  // adjust the import to your file structure
import Project from '../src/components/Project/Project';  // adjust the import to your file structure
import 'font-awesome/css/font-awesome.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />



      </Routes>
    </Router>
  );
};

export default App;
