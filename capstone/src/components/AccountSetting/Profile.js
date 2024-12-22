import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt, faLock, faBook, faShareAlt, faLanguage, faFileAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <Header/>

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

      <Footer/>
    </div>
  );
}

export default Profile;