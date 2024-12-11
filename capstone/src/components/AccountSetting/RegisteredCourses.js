import React, { useState } from 'react';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faPencil, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function RegisteredCourses() {

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
    const handleLearningPath = () => {
      navigate('/learnpath');
    }

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
                    <a href="#">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </a>
                </div>
            </header>
            <nav>
            <ul>
              <li><a href="#" onClick={handleLogoClick}>Trang chủ</a></li>
              <li><a href="#" onClick={handleCourseDetailClick}>Khóa học</a></li>
              <li><a href="#" onClick={handleLearningPath}>Lộ trình học tập</a></li>
              <li><a href="#">Chia sẻ kiến thức</a></li>
            </ul>
            </nav>

            <div className={styles.profilePage}>
                <div className={styles.sidebar}>
                    <a href="#" onClick={handleProfile}>
                    <FontAwesomeIcon icon={faUser} />
                    Profile
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLock} />
                    Privacy and security
                </a>
                <a href="#" style={{ textDecoration: 'underline' }}>
                    <FontAwesomeIcon icon={faBook} />
                    Registered courses
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faShareAlt} />
                    Share knowledge
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLanguage} />
                    Language
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faFileAlt} />
                    Terms &amp; Policies
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    About
                </a>
                </div>
            </div>

            <div class={styles.content}>
                <h2>
                    Các khóa học đã tham gia
                </h2>
                <div class={styles.courseCard}>
                    <a href="#">
                    <img alt="C++ Course Image" height="100" src="https://storage.googleapis.com/a1aa/image/TaaKihp0QNLcJF0NsibeVuBs5Rxdv94ZTVaf7A0SowyQwF0TA.jpg" width="100"/>
                    </a>
                    <div class={styles.courseInfo}>
                    <a href="#">
                    <h3>
                    Lập trình C++ cơ bản, nâng cao
                    </h3>
                    </a>
                    <p>
                    Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn c...
                    </p>
                    </div>
                </div>
                <div class={styles.courseCard}>
                    <a href="#">
                    <img alt="JavaScript Course Image" height="100" src="https://storage.googleapis.com/a1aa/image/qePEfXYYPgm3J0nKUkae4eaeQ7Ggyxn2kEZUKXT0ff2iG4C6JA.jpg" width="100"/>
                    </a>
                    <div class={styles.courseInfo}>
                    <a href="#">
                    <h3>
                    Lập Trình JavaScript Cơ Bản
                    </h3>
                    </a>
                    <p>
                    Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và các bài tập thực hành sau mỗi bài học.
                    </p>
                    </div>
                </div>
                <div class={styles.courseCard}>
                    <a href="#">
                    <img alt="HTML CSS Course Image" height="100" src="https://storage.googleapis.com/a1aa/image/SjQfUkyfcLh66UmkmHFNFPsJKXfkTRzrspXQqpxJMndlgLonA.jpg" width="100"/>
                    </a>
                    <div class={styles.courseInfo}>
                    <a href="#">
                    <h3>
                    HTML CSS từ Zero đến Hero
                    </h3>
                    </a>
                    <p>
                    Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện trang web
                    </p>
                    </div>
                </div>
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
export default RegisteredCourses;