import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function SignUpForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h2>Sign Up</h2>
        <form action="#">
          <div className={styles.inputField}>
            <input type="text" placeholder="Username" required />
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
              required 
            />
            <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className={styles.inputField}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Re-enter password" 
              required 
            />
            <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className={styles.inputField}>
            <input type="email" placeholder="Email" required />
            <span className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <div className={styles.inputField}>
            <input type="tel" placeholder="Enter your phone number" required />
            <span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>
          </div>
          <button type="submit" className={styles.btn}>Sign up</button>
          <div className={styles.loginLink}>
            <p>Bạn đã có tài khoản, <a href="#" onClick={handleLoginClick}>Đăng Nhập</a>.</p>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> Đồng các điều khoản bởi <a href="#">P3L</a></label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
