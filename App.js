import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BlogPost from './pages/BlogPost';
import About from './pages/about';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './styles.css'; // Import custom CSS

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is included here, so it appears on every page */}
        <Navbar />
        {/* Define routing for different pages */}
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Home page */}
          <Route path="/post/:id" element={<BlogPost />} /> {/* Blog post detail page */}
          <Route path="/about" element={<About />} /> {/* about page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
