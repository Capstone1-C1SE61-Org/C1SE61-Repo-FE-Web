import React from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function CourseDescription() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/')
    };
    const handleCourseDetailClick = () => {
        navigate('/coursedetail');
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
                    <div className={styles.user}>
                    {/* <img src={require('../../images/logo.png')} alt="User" className={styles.userIcon} /> */}
                    <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faUser} />
                        User Account
                        </a>
                    </span>
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
            <main>
                <div className={styles.courseContainer}>
                    {/* Left Section */}
                    <div className={styles.courseLeft}>
                        <h2>HTML từ Zero đến Hero</h2>
                        <p className={styles.introText}>Trong khóa này chúng ta học để hiểu biết về HTML, làm được những gì trong lộ trình học.</p>

                        <h3>Bạn sẽ học được gì?</h3>
                        <div className={styles.learningContent}>
                            <p className={styles.redText}>content content content</p>
                            <p className={styles.redText}>content content content</p>
                        </div>

                        <h3>Nội dung khóa học</h3>
                        <div className={styles.courseContent}>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                            <div className={styles.contentBlock}></div>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailsLeft}>
                                <h3>Đặc điểm khi học xong khóa học</h3>
                                <p className={styles.redText}>content ccccccccccccccccccccccccccc</p>
                                <p className={styles.redText}>content ccccccccccccccccccccccccccc</p>
                                <p className={styles.redText}>content ccccccccccccccccccccccccccc</p>
                                <p className={styles.redText}>content ccccccccccccccccccccccccccc</p>
                            </div>
                            <div className={styles.detailsRight}>
                                <h3>Mô tả khóa học</h3>
                                <p className={styles.redText}>content ccccccccccccccccccccccccccc</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className={styles.courseRight}>
                        <div className={styles.courseImage}>
                            <span>HTML</span>
                            <p>The language for building web pages</p>
                            <button className={styles.learnBtn}>Learn HTML</button>
                        </div>
                        <button className={styles.registerBtn}>Đăng kí học</button>
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
