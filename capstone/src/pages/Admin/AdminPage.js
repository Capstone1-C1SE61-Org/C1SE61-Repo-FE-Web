import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function AdminPage() {
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
  };
  const handleAdminPage = () => {
    navigate('/admin');
  };
  const handleManageInstructor = () => {
    navigate('/manageinstructor');
  }

  return (
    <div className={styles.dashboard}>
      <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={handleAdminPage}>
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} /> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#" onClick={handleManageUser}>User account</a>
          <a href="#" onClick={handleManageInstructor}>Instructor account</a>
        </div>
        <a href="#">
          <FontAwesomeIcon icon={faBook} /> Manage course
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComments} /> Manage feedback
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
              style={{ cursor: "pointer"}}
              onClick={handleAdminPage}
            />
            <span>
              P3L<br />Admin
            </span>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <h3>0</h3>
              <p>Users</p>
            </div>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className={styles.card}>
            <div>
              <h3>0</h3>
              <p>Course</p>
            </div>
            <FontAwesomeIcon icon={faBook} />
          </div>
          <div className={styles.card}>
            <div>
              <h3>0</h3>
              <p>Feedback</p>
            </div>
            <FontAwesomeIcon icon={faComments} />
          </div>
        </div>
        <div className={styles.tableContainer}>
          <h3>Managers</h3>
          <a className={styles.viewAll} href="#">
            View All
          </a>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Võ Duy Hùng</td>
                <td>hvo190403@gmail.com</td>
                <td>0392930729</td>
              </tr>
              <tr>
                <td>Huỳnh Văn Tâm</td>
                <td>hvantam0612@gmail.com</td>
                <td>0898429487</td>
              </tr>
              <tr>
                <td>Nguyễn Duy Trí</td>
                <td>duytri02@gmail.com</td>
                <td>0326683799</td>
              </tr>
              <tr>
                <td>Trương Tất Trung</td>
                <td>trungacelessi@gmail.com</td>
                <td>0967542309</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
