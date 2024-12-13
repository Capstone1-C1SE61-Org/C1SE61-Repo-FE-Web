import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faUser, faPencilAlt, faBell, faUserCircle, faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    birthday: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/user/profile")
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleEditToggle = (field) => {
    setIsEditing((prevEditing) => ({
      ...prevEditing,
      [field]: !prevEditing[field],
    }));
  };

  const handleSave = (field) => {
    axios
      .put(`http://localhost:8080/api/v1/public/customer${field}`, { [field]: profile[field] })
      .then(() => {
        setIsEditing((prevEditing) => ({
          ...prevEditing,
          [field]: false,
        }));
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  if (loading) {
    return <p>Đang tải thông tin...</p>;
  }

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header>
        <div className={styles.logo} onClick={() => handleNavigate('/')}>
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
          <li><a href="#" onClick={() => handleNavigate('/')}>Trang chủ</a></li>
          <li><a href="#" onClick={() => handleNavigate('/coursedetail')}>Khóa học</a></li>
          <li><a href="#" onClick={() => handleNavigate('/learnpath')}>Lộ trình học tập</a></li>
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
          <a href="#" onClick={() => handleNavigate('/registeredcourse')}>
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

        <div className={styles.content}>
          <div className={styles.profileHeader}>
            <img
              src={require("../../images/avatar.jpg")}
              alt="Profile Picture"
              className={styles.logoImg}
              height="100"
              width="100"
            />
            <h2>{profile.name}</h2>
          </div>

          <div className={styles.profileInfo}>
            <h3>Thông tin cá nhân</h3>

            {["name", "email", "phone", "birthday"].map((field) => (
              <div className={styles.infoItem} key={field}>
                <label>
                  {field === "name"
                    ? "Tên người dùng:"
                    : field === "email"
                    ? "Email:"
                    : field === "phone"
                    ? "Số điện thoại:"
                    : "Ngày sinh:"}
                </label>
                {isEditing[field] ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={profile[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    onBlur={() => handleSave(field)} // Lưu khi người dùng thoát khỏi ô input
                  />
                ) : (
                  <span>{profile[field]}</span>
                )}
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  onClick={() => handleEditToggle(field)}
                />
              </div>
            ))}
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
