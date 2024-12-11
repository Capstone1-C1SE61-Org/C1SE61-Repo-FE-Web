import React from 'react';
import styles from './CourseDetail.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CourseDetails = () => {
    const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/')
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSignupClick = () => {
    navigate('/register');
  };
  const handleCourseDescriptionClick = () => {
    navigate('/learn');
  }
  const handleCourseDetailClick = () => {
    navigate('/coursedetail');
  }
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
        <div className={styles.authButtons}>
          <button className={styles.loginBtn} onClick={handleLoginClick}>Login</button>
          <button className={styles.signupBtn} onClick={handleSignupClick}>Sign up</button>
        </div>
      </header>

      <nav>
        <ul>
          <li onClick={handleLogoClick}><a href="#">Trang chủ</a></li>
          <li><a href="#" onClick={handleCourseDetailClick}>Khóa học</a></li>
          <li><a href="#" onClick={handleLearningPath}>Lộ trình học tập</a></li>
          <li><a href="#">Chia sẻ kiến thức</a></li>
        </ul>
      </nav>

      <main className={styles.content}>
        <h2>Khóa học của tôi</h2>
        <p>Bạn chưa hoàn thành khóa học nào.</p>
        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle} >HTML từ zero đến hero</div>
          </div>
          <div className={styles.courseInfo}>
            <div>HTML từ zero đến hero</div>
            <div>Học cách đây 30 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
        <div className={styles.courseCSS}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle}>CSS từ zero đến hero</div>
          </div>
          </div>
          <div className={styles.courseInfo}>
            <div>CSS từ zero đến hero</div>
            <div>Học cách đây 17 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} onClick={handleCourseDescriptionClick}>
        <div className={styles.courseJavaScript}>
          <div className={styles.courseImage}>
            <div className={styles.courseTitle}>JavaScript từ zero đến hero</div>
          </div>
          </div>
          <div className={styles.courseInfo}>
            <div>JavaScript từ zero đến hero</div>
            <div>Học cách đây 7 ngày trước</div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#">Khóa học thịnh hành</a>
            <a href="#">Blog</a>
            <a href="#">Thành viên</a>
            <a href="#">Mục xem nhiều</a>
          </div>
          <div className={styles.footerAbout}>
            <br/>
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
};

export default CourseDetails;
