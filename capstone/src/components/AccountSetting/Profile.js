import React, { useState } from 'react';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faPencil, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';

function Profile() {
<<<<<<< HEAD
    const [profile, setProfile] = useState("");
    const [isEditing, setIsEditing] = useState("");
=======
    const [profile, setProfile] = useState({
      name: "Huỳnh Văn Tâm",
      email: "hvantam11@gmail.com",
      phone: "0898429487",
      birthday: "6 tháng 12, 2003",
    });
  
    const [isEditing, setIsEditing] = useState({
      name: false,
      email: false,
      phone: false,
      birthday: false,
    });
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
  
    const handleEditToggle = (field) => {
      setIsEditing((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };
  
    const handleInputChange = (field, value) => {
      setProfile((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

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
<<<<<<< HEAD
    } ;
    const handleRegisteredCourses = () => {
      navigate('/registeredcourse');
    };
=======
    }  
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
  
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
<<<<<<< HEAD
              <li><a href="#" onClick={handleCourseDetailClick}>Khóa học</a></li>
=======
              <li onClick={handleCourseDetailClick}><a href="#">Khóa học</a></li>
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
              <li><a href="#" onClick={handleLearningPath}>Lộ trình học tập</a></li>
              <li><a href="#">Chia sẻ kiến thức</a></li>
            </ul>
            </nav>

        <div className={styles.profilePage}>
        <div className={styles.sidebar}>
            <a href="#" style={{ textDecoration: 'underline' }}>
            <FontAwesomeIcon icon={faUser} />
            Profile
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLock} />
            Privacy and security
          </a>
<<<<<<< HEAD
          <a href="#" onClick={handleRegisteredCourses}>
=======
          <a href="#">
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
            <FontAwesomeIcon icon={faBook} />
            Registered courses
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faShareAlt} />
<<<<<<< HEAD
            Share knowledge
=======
            Share statistics
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
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
  
        <div className={styles.content}>
          <div className={styles.profileHeader}>
              <img src={require('../../images/avatar.jpg')} alt="Profile Picture" className={styles.logoImg}
              height="100"
              width="100"
              />
            <h2>Văn Tâm</h2>
          </div>
  
          <div className={styles.profileInfo}>
            <h3>Thông tin cá nhân</h3>
            <div className={styles.infoItem}>
              <label>Tên người dùng:</label>
              {isEditing.name ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              ) : (
                <span>{profile.name}</span>
              )}
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => handleEditToggle("name")}
              />
            </div>
  
            <div className={styles.infoItem}>
              <label>Email:</label>
              {isEditing.email ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              ) : (
                <span>{profile.email}</span>
              )}
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => handleEditToggle("email")}
              />
            </div>
  
            <div className={styles.infoItem}>
              <label>Số điện thoại:</label>
              {isEditing.phone ? (
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              ) : (
                <span>{profile.phone}</span>
              )}
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => handleEditToggle("phone")}
              />
            </div>
  
            <div className={styles.infoItem}>
              <label>Ngày sinh:</label>
              {isEditing.birthday ? (
                <input
                  type="text"
                  value={profile.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                />
              ) : (
                <span>{profile.birthday}</span>
              )}
              <FontAwesomeIcon
                icon={faPencilAlt}
                onClick={() => handleEditToggle("birthday")}
              />
            </div>
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
  
  export default Profile;