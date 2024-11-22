import React, { useState } from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faPencil, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';

function CourseDescription() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/')
        
    };
    const handleCourseDetailClick = () => {
        navigate('/coursedetail');
    };
    const handleProfile = () => {
        navigate('/profile');
    };
    
    return (
        
        <div>
            <header>
                <div className={styles.logo} onClick={handleLogoClick}>
                <img src={require('../../images/logo.png')} alt="Logo" className={styles.logoImg} />
                </div>
                <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
                <span className={styles.searchIcon}>
                <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                </span>
                </div>
                <div className={styles.icons}>
                    <a href="#">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                    <a href="#" onClick={handleProfile}>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </a>
                </div>
            </header>
            <nav>
            <ul>
              <li><a href="#" onClick={handleLogoClick}>Trang chủ</a></li>
              <li onClick={handleCourseDetailClick}><a href="#">Khóa học</a></li>
              <li><a href="#">Lộ trình học tập</a></li>
              <li><a href="#">Chia sẻ kiến thức</a></li>
            </ul>
            </nav>
            {/* Main Content and Sidebar */}
            <div className={styles.Container}>
                <div className={styles.mainContent}>
                <div className={styles.lessonHeader}>HTML cơ bản</div>
                <div className={styles.lesson}>
                    <video controls>
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.lessonTitle}>
                    <h2>Tên đề bài</h2>
                    <span>Cập nhật tháng 9 năm 2024</span>
                    <a href="#">
                    <FontAwesomeIcon icon={faPencil} />
                    </a>
                </div>
                </div>

                {/* Sidebar */}
                <div className={styles.sidebar}>
                <h3>Nội dung bài học: 0/100</h3>
                <ul>
                    <li>I. Mục đề Chương 1</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li>II. Mục đề chương 2</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>III. Mục đề chương 3</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                </ul>
                {/* <button>Bài kiểm tra</button> */}
                </div>
                </div>
                <div className={styles.navBut}>
                <div className={styles.navButtons}>
                    <button>&lt; Quay lại</button>
                    <button>Bài tiếp theo &gt;</button>
                    </div>
                    <span className={styles.help}>Hỏi đáp</span>
                </div>

            <footer>
                <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <a href="#">Khóa học thịnh hành</a>
                    <a href="#">Blog</a>
                    <a href="#">Thành viên</a>
                    <a href="#">Mục xem nhiều</a>
                </div>
                <div className={styles.footerAbout}>
                    <p>Về chúng tôi</p>
                    <p>C1SE.61-CapStone là nơi giúp các bạn học tập, bổ sung kiến thức và cải thiện kĩ năng lập trình cho người mới bắt đầu. Cập nhật liên tục, chính xác và đầy đủ.</p>
                    <p>Liên hệ chúng tôi: <a href="mailto:P3L@gmail.com" className={styles.email}>P3L@gmail.com</a></p>
                </div>
                <div className={styles.footerFollow}>
                    <p>Theo dõi chúng tôi</p>
                    <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" aria-label="Google"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                </div>
                <p className={styles.copyright}>© Copyright 2025 P3L. All rights reserved</p>
            </footer>
        </div>
    );
}
export default CourseDescription;
