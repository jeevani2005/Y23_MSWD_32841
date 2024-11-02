import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Students from './components/Students';
import Feedback from './components/Feedback';
import Faculty from './components/Faculty';
import Courses from './components/Courses';
import Attendence from './components/Attendence';
import Home from './components/Home'; // Make sure to import Home
import NotFound from './components/NotFound'; // Make sure to import NotFound
import Timetable from './components/Timetable';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state after successful login
  };

  return (
    
      <Router>
      <div className="App">
      
        <Navbar />
        <Routes>
        
          <Route path="/Home" element={<h1>Home Page</h1>} /> {/* Example Home Page */}
          <Route path="/courses" element={<Courses />} /> {/* Define the Courses route */}
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/ skill" element={< Skill/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/attendence" element={<Attendence/>} />
          <Route path="/feedback" element={<Feedback/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
