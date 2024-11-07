import React from 'react';
import './CourseDetail.module.css';
import { useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/')
  };
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="left-header">
            <img onClick={handleLogoClick}
              src="../../images/logo.png"
              alt="Logo"
              className="logo"
            />
            <a href="#">Trang chủ</a>
            <a href="#">Khóa học</a>
            <a href="#">Lộ trình học tập</a>
            <a href="#">Chia sẻ kiến thức</a>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
          <div className="user">
            <img src="user-icon.png" alt="User" className="user-icon" />
            <span>Username</span>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {/* Left Section */}
          <div className="left-section">
            <h2>HTML CSS cơ bản</h2>
            <div className="lesson-image">
              <span>Bài học</span>
            </div>
            <div className="lesson-info">
              <h3>Tên đề bài</h3>
              <p>Cập nhật tháng 9 năm 2024</p>
            </div>
            <div className="question-section">
              <p>Question</p>
              <div className="question-box"></div>
            </div>
            <div className="notes">
              <button className="note-btn">Ghi chú</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="lesson-progress">
              <h3>Nội dung bài học: 0/100</h3>
              <ul>
                <li>1. Mục đề Chương 1</li>
                <li>2.</li>
                <li>3.</li>
                <li>4.</li>
                <li>5.</li>
                <li>6.</li>
                <li>7.</li>
                <li>8.</li>
                <li>9.</li>
                <li>10.</li>
              </ul>
              <button className="check-btn">Bài kiểm tra</button>
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="prev-btn">Quay lại</button>
          <button className="next-btn">Bài tiếp theo</button>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">Khóa học thịnh hành</a>
            <a href="#">Blog</a>
            <a href="#">Thành viên</a>
            <a href="#">Mục xem nhiều</a>
          </div>
          <div className="footer-about">
            <p>Về chúng tôi</p>
            <p>C1SE.61-CapStone là nơi giúp các bạn học tập...</p>
          </div>
          <div className="footer-follow">
            <p>Theo dõi chúng tôi</p>
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="google.png" alt="Google" /></a>
            <a href="#"><img src="github.png" alt="GitHub" /></a>
          </div>
        </div>
        <p className="copyright">© Copyright 2025. All rights reserved</p>
      </footer>
    </div>
  );
};

export default CourseDetails;
