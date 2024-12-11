import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Homepage from './pages/Homepage';
import Register from './components/Register/Register'
import CourseDetails from './components/CourseDetail/CourseDetail';
import CourseDescription from './components/CourseDescription/CourseDescription'
import VerifyCode from './components/VerifyCode/VerifyCode';
import Profile from './components/AccountSetting/Profile';
import LearningPath from './components/LearningPath/LearningPath';
<<<<<<< HEAD
import RegisteredCourses from './components/AccountSetting/RegisteredCourses';
=======
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/coursedetail" element={<CourseDetails/>}/>
      <Route path="/learn" element={<CourseDescription/>}/>
      <Route path="/verify" element={<VerifyCode/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/learnpath" element={<LearningPath/>}/>
<<<<<<< HEAD
      <Route path="/registeredcourse" element={<RegisteredCourses/>}/>
=======
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
    </Routes>
    
  );
  
}

export default App;
