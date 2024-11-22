import React from 'react';
import styles from'./LearningPath.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faJava,} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function LearningPath() {
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
  const handleCourseDetailClick = () => {
    navigate('/coursedetail');
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
          <li onClick={handleCourseDetailClick}><a href="#">Khóa học</a></li>
          <li><a href="#">Lộ trình học tập</a></li>
          <li><a href="#">Chia sẻ kiến thức</a></li>
        </ul>
      </nav>
      <body>
      <div className={styles.Container}>
        <h1>Lộ trình học</h1>
        <p>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm
          với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
        </p>
        <div className={styles.card}>
          <img
            alt="Front-end Image"
            height="100"
            src={require('../../images/FE_icon.jpg')}
            width="100"
          />
          <div>
            <h2>Lộ trình học Front-end</h2>
            <p>
              Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ
              chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
            </p>
            <div className={styles.icons}>
                <a href="#">
                <FontAwesomeIcon icon={faHtml5} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faCss3Alt} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faJs} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faReact} />
                </a>
            </div>
            <button>XEM CHI TIẾT</button>
          </div>
        </div>
        <div className={styles.card}>
          <img
            alt="Back-end Image"
            height="100"
            src={require('../../images/BE_icon.jpg')}
            width="100"
          />
          <div>
            <h2>Lộ trình học Back-end</h2>
            <p>
              Lập trình viên Back-end là người làm việc với dữ liệu, công việc
              thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end
              nhé.
            </p>
            <div className={styles.icons}>
                <a href="#">
                <FontAwesomeIcon icon={faNodeJs} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faPython} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faJava} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faDatabase} />
                </a>
            </div>
            <button>XEM CHI TIẾT</button>
          </div>
        </div>
      </div>
    </body>
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
}
export default LearningPath;