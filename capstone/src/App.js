import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Homepage from './pages/Homepage';
import Register from './components/Register/Register'
import CourseDetails from './components/CourseDetail/CourseDetail';
import CourseDescription from './components/CourseDescription/CourseDescription'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/coursedetail" element={<CourseDetails/>}/>
      <Route path="/learn" element={<CourseDescription/>}/>
    </Routes>
  );
}

export default App;
