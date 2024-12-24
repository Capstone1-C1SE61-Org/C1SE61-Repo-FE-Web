import React from 'react';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function RegisteredCourses() {

    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/profile');
    };
    return (
        <div>
            <Header/>

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
            <Footer/>
        </div>
    );
}
export default RegisteredCourses;