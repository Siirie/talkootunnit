import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/navbar';
import AddHours from './components/addhours';



function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element='' />
        <Route path="/profile" element='' />
        <Route path="/addhours" element={<AddHours/>} />
        <Route path="/info" element='' />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <div>
        
        
      </div>
    </Router>
  );
}

export default App;
