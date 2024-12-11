import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { registerUser } from '../../redux/apiRequest';

function SignUpForm() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [address, setAddress] = useState("");
  const [idCard, setIdCard] = useState("");
  const [userType, setUserType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleVerifyClick = () => {
    navigate('/verify');
  };
<<<<<<< HEAD
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      username: username,
      password: password,
      phone: phone,
      name: name,
      code: code,
      gender: gender,
      dateofBirth: dateofBirth,
      address: address,
      idCard: idCard,
      userType: userType,
    };
    registerUser (newUser, dispatch, navigate);
};
=======
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h2>Sign Up</h2>
          <form onSubmit={handleRegister}>
          <div className={styles.inputField}>
            <input 
            type="text" 
            placeholder="Username" 
            onChange={(e)=>setUsername(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
              onChange={(e)=>setPassword(e.target.value)}
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
              onChange={(e)=>setRepassword(e.target.value)}
              required 
            />
            <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
            <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className={styles.inputField}>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <div className={styles.inputField}>
            <input 
            type="tel" 
            placeholder="Enter your phone number" 
            onChange={(e)=>setPhone(e.target.value)}
            required />
            <span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>
          </div>
<<<<<<< HEAD
          <button type="submit" className={styles.btn}>Sign up</button>
          </form>
=======
          <button type="submit" className={styles.btn} onClick={handleVerifyClick}>Sign up</button>
>>>>>>> 3592c6ab27cdec571e58ea07c2c8d127cb5fabef
          <div className={styles.loginLink}>
            <p>Bạn đã có tài khoản, <a href="#" onClick={handleLoginClick}>Đăng Nhập</a>.</p>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> Đồng các điều khoản bởi <a href="#">P3L</a></label>
          </div>
      </div>
    </div>
  );
}

export default SignUpForm;
