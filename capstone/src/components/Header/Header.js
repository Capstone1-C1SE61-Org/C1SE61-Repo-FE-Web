import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
    const user = useSelector((state)=> state.auth.login.currentUser)
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/')
    };
    const handleCourseDetailClick = () => {
        navigate('/coursedetail');
    };
    const handleLearningPath = () => {
        navigate('/learnpath');
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
      <div className={styles.authButtons}>
        {user ? (
          <>
            <p className="navbar-user">
              <div className={styles.icons}>
                <a href="#">
                  <FontAwesomeIcon icon={faBell} />
                </a>
                <a href="#" onClick={handleProfile}>
                  <FontAwesomeIcon icon={faUserCircle} />
                </a>
                <span> {user.username} </span>
              </div>
            </p>
            <Link to="/logout" className="navbar-logout"> Đăng xuất</Link>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.loginBtn}> Đăng Nhập </Link>
            <Link to="/register" className={styles.signupBtn}> Đăng Ký</Link>
          </>
        )}
      </div>
    </header>

    <nav>
      <ul>
        <li onClick={handleLogoClick}><a href="#">Trang chủ</a></li>
        <li onClick={handleCourseDetailClick}><a href="#">Khóa học</a></li>
        <li onClick={handleLearningPath}><a href="#">Lộ trình học tập</a></li>
        <li><a href="#">Chia sẻ kiến thức</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;
