import React, { useState } from 'react';
import styles from'./ManageUserAccount.module.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars } from "@fortawesome/free-solid-svg-icons";
const ManageUserAccount = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (name, username, phone, email, avatar) => {
    setModalData({ name, username, phone, email, avatar });
  };

  const closeModal = () => {
    setModalData(null);
  };
  const [isSidebarHidden, setSidebarHidden] = useState(false);
    const [isSubmenuVisible, setSubmenuVisible] = useState(false);
    const navigate = useNavigate();
  
    const toggleSidebar = () => {
      setSidebarHidden(!isSidebarHidden);
    };
  
    const toggleSubmenu = (e) => {
      e.preventDefault();
      setSubmenuVisible((prev) => !prev);
    };
    const handleManageUser = () => {
      navigate('/manageuser');
    }
    const handleAdminPage = () => {
        navigate('/admin');
      };
  

  const users = [
    {
      name: 'Văn Tâm',
      username: 'vantam',
      phone: '+91 385 102 6418',
      email: 'kicadat478@gmail.com',
      avatar: 'https://placehold.co/100x100',
    },
    {
      name: 'Kỳ Duyên',
      accountType: 'kyduyen',
      phone: '+91 385 585 2058',
      email: 'kingg.holbrook@gmail.com',
      avatar: 'https://placehold.co/100x100',
    },
  ];

  return (
    <div className={styles.accountManagement}>
        <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={handleAdminPage} >
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} /> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#" onClick={handleManageUser}>User account</a>
          <a href="#">Instructor account</a>
        </div>
        <a href="#">
          <FontAwesomeIcon icon={faBook} /> Manage course
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComments} /> Manage feedback
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUsersCog} /> Manage community
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLifeRing} /> Support
        </a>
      </div>
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.fullWidth : ""}`}>
        <div className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} /> Dashboard
          </h2>
          <div className={styles.userInfo}>
            <img
              src={require("../../images/logo.png")}
              alt="Logo"
              height="100"
              width="100"
            />
            <span>
              P3L<br />Admin
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <h1>Account Management</h1>
          <div className={styles.filters}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className={styles.actions}>
                      <i
                        className="fas fa-eye"
                        onClick={() =>
                          openModal(
                            user.name,
                            user.username,
                            user.phone,
                            user.email,
                            user.avatar
                          )
                        }
                      ></i>
                      <i className="fas fa-edit edit"></i>
                      <i className="fas fa-trash delete"></i>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <div className="info">1-25 of 100</div>
              <div className="controls">
                <i className="fas fa-angle-left"></i>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      {modalData && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2>User Details</h2>
              <span className={styles.close} onClick={closeModal}>
                ×
              </span>
            </div>
            <div className={styles.modalBody}>
              <img
                src={modalData.avatar}
                alt="User avatar"
                height="100"
                width="100"
              />
              <p>
                <strong>Name:</strong> {modalData.name}
              </p>
              <p>
                <strong>Account Type:</strong> {modalData.username}
              </p>
              <p>
                <strong>Phone:</strong> {modalData.phone}
              </p>
              <p>
                <strong>Email:</strong> {modalData.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ManageUserAccount;
