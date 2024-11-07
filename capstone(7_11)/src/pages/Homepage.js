// src/components/HomePage.js
import React from 'react';
import styles from'./Homepage.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
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
          <img src="../images/logo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
          <span className={styles.searchIcon}>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          </span>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.loginBtn} onClick={handleLoginClick}>Login</button>
          <button className={styles.signupBtn} onClick={handleSignupClick}>Sign up</button>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li onClick={handleCourseDetailClick}><a href="#">Khóa học</a></li>
          <li><a href="#">Lộ trình học tập</a></li>
          <li><a href="#">Chia sẻ kiến thức</a></li>
        </ul>
      </nav>

      <section className={styles.htmlSection}>
        <div className={styles.titleBox}>
        <h1>HTML</h1>
        <p>The language for building web pages</p>
        <button className={styles.learnBtn}>Learn HTML</button>
        </div>
        <div className={styles.codeExample}>
          <h3>HTML Example:</h3>
          <pre>
            &lt;!DOCTYPE html&gt;<br/>
            &lt;html&gt;<br/>
            &lt;head&gt;<br/>
                &lt;title&gt;HTML Tutorial&lt;/title&gt;<br/>
            &lt;/head&gt;<br/>
            &lt;body&gt;<br/>
                &lt;h1&gt;This is a heading&lt;/h1&gt;<br/>
                &lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>
            &lt;/body&gt;<br/>
            &lt;/html&gt;<br/>
          </pre>
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.cssSection}>
        <div className={styles.titleBox}>
        <h1>CSS</h1>
        <p>The language for styling web pages</p>
        <button className={styles.learnBtn}>Learn CSS</button>
        </div>
        <div className={styles.codeExample}>
          <h3>CSS Example:</h3>
          <pre>
            body {'{'}<br/>
              background-color: lightblue;<br/>
            {'}'}<br/>
            h1 {'{'}<br/>
              color: white;<br/>
              text-align: center;<br/>
            {'}'}<br/>
            p {'{'}<br/>
              font-family: verdana;<br/>
              font-size: 20px;<br/>
            {'}'}<br/>
          </pre>
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.JavaScriptSection}>
        <div className={styles.titleBox}>
        <h1>JavaScript</h1>
        <p>The language for programming web pages</p>
        <button className={styles.learnBtn}>Learn JavaScript</button>
        </div>
        <div className={styles.codeExample}>
          <h3>JavaScript Example:</h3>
          <pre>
            &lt;button onclick="myFunction()"&gt;<br/>Click Me!&lt;/button&gt;<br/>
            &lt;script&gt;<br/>
            function myFunction() {'{'}<br/>
            &nbsp;&nbsp;let x = document.getElementById("demo");<br/>
            &nbsp;&nbsp;x.style.fontSize = "25px";<br/>
            &nbsp;&nbsp;x.style.color = "red";<br/>
            {'}'}<br/>
            &lt;/script&gt;
          </pre>
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

      <section className={styles.JavaSection}>
        <div className={styles.titleBox}>
        <h1>Java</h1>
        <p>A programming language</p>
        <button className={styles.learnBtn}>Learn Java</button>
        </div>
        <div className={styles.codeExample}>
          <h3>Java Example:</h3>
          <pre>
            public class Main {'{'}<br/>
            &nbsp;&nbsp;public static void main(String[] args) {''}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br/>
            &nbsp;&nbsp;{'}'}<br/>
            {'}'} <br/>
          </pre>
          <button className={styles.tryBtn}>Try it Yourself</button>
        </div>
      </section>

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
            <p>C1SE.61-CapStone là nơi giúp các bạn học tập...</p>
          </div>
          <div className={styles.footerFollow}>
            <p>Theo dõi chúng tôi</p>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-google"></i></a>
            <a href="#"><i className="fa-brands fa-square-github"></i></a>
          </div>
        </div>
        <p className={styles.copyright}>© Copyright 2025 SochiDev. All rights reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
