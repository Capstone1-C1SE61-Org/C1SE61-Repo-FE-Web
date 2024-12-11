import React, { useState } from 'react';
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSignupClick = () => {
        navigate('/register');
      };
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser,dispatch,navigate);
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                    <div className={styles.inputField}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className={styles.icon}><FontAwesomeIcon icon={faLock} /></span>
                        <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    <button type="submit" className={styles.btn}>Login</button>
                    </form>
                    <a href="#" className={styles.forgot}>Forgot password?</a>
                    <div className={styles.socialLogin}>
                        <p>Another app</p>
                        <div className={styles.socialIcon}>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#0941ec' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faGoogle} style={{ color: 'crimson' }} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#000000' }} /></a>
                        </div>
                    </div>
                    <div className={styles.signup}>
                        <p>Bạn chưa có tài khoản, <a href="#" onClick={handleSignupClick}>Đăng Ký</a>.</p>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">
                            Đồng các điều khoản bởi <a href="#">P3L</a>
                        </label>
                    </div>
            </div>
        </div>
        
    );
}

export default Login;