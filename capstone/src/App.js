import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Homepage from './pages/HomePage/Homepage';
import Register from './components/Register/Register'
import Course from './components/Course/Course';
import CourseDescription from './components/CourseDescription/CourseDescription'
import VerifyCode from './components/VerifyCode/VerifyCode';
import Profile from './components/AccountSetting/Profile';
import LearningPath from './components/LearningPath/LearningPath';
import RegisteredCourses from './components/AccountSetting/RegisteredCourses';
import Introduction from './components/FootLink/Introduction';
import AdminPage from './pages/Admin/AdminPage'
import ManageUserAccount from './pages/Admin/ManageUserAccount';
import ManageInstructorAccount from './pages/Admin/ManageInstructorAccount';
import CourseDetail from './components/CourseDetail/CourseDetail';
import AdminManageCourse from './pages/Admin/AdminManageCourse';
import InstructorPage from './pages/Instructor/InstructorPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/course" element={<Course/>}/>
      <Route path="/learn/:courseId" element={<CourseDescription />} />
      <Route path="/verify" element={<VerifyCode/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/learnpath" element={<LearningPath/>}/>
      <Route path="/registeredcourse" element={<RegisteredCourses/>}/>
      <Route path="/intro" element={<Introduction/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/manageuser" element={<ManageUserAccount/>}/>
      <Route path="/manageinstructor" element={<ManageInstructorAccount/>}/>
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/adminmanagecourse" element={<AdminManageCourse/>}/>
      <Route path="/instructor" element={<InstructorPage/>}/>
    </Routes>
    
  );
  
}

export default App;
