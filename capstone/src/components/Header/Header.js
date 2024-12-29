import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext'
import { request } from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
    const token = localStorage.getItem('token'); // Lấy token từ Local Storage
    const [searchQuery, setSearchQuery] = useState('');
    // const user = useSelector((state)=> state.auth.login.currentUser)
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
    const handleLogout = () => {
      // Xóa token khỏi Local Storage khi đăng xuất
      localStorage.removeItem('token');
      navigate('/');
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  // GET USER INFO
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
      const fetchUserData = async () => {
          try {
              const res = await request.get('/customer/detail')
              setUserData(res)
          } catch (error) {
              console.log("Error fetching user information", error);
          }
      }

      if (user) {
          fetchUserData();
      }
  }, [user])
  return (
    <div>
    <header>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={require('../../images/logo.png')} alt="Logo" className={styles.logoImg} />
      </div>
      <div className={styles.searchBar}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className={styles.searchIcon}>
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </span>
        </form>
      </div>
      <div className={styles.authButtons}>
        {token ? (
          <>
            <p className="navbar-user">
              <div className={styles.icons}>
                <a href="#">
                  <FontAwesomeIcon icon={faBell} />
                </a>
                <a href="#" onClick={handleProfile}>
                    <img
                  component="img"
                  src={ userData.customerImg || ''}
                  alt="avatar"
                  height="30"
                  width="30"
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                  </a>
                  <span> {userData.username} </span>
              </div>
            </p>
            <Link to="/" className={styles.navbarLogout} onClick={handleLogout}> Đăng xuất</Link>
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
