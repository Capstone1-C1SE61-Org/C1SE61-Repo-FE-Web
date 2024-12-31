import React, { useState } from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CourseDescription() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const res = await request.get('/customer/detail')
    //             setUserData(res)
    //         } catch (error) {
    //             console.log("Error fetching user information", error);
    //         }
    //     }
    
    //     if (user) {
    //         fetchUserData();
    //     }
    // }, [user])
    return (
        
        <div>
            <Header/>
            <div className={styles.Container}>
                <div className={styles.mainContent}>
                <div className={styles.lessonHeader}>HTML cơ bản</div>
                <div className={styles.lesson}>
                    <video controls>
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.lessonTitle}>
                    <h2>Tên đề bài</h2>
                    <span>Cập nhật tháng 9 năm 2024</span>
                    <a href="#">
                    <FontAwesomeIcon icon={faPencil} />
                    </a>
                </div>
                </div>
                <div className={styles.sidebar}>
                <h3>Nội dung bài học: 0/100</h3>
                <ul>
                    <li>I. Mục đề Chương 1</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li>II. Mục đề chương 2</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>III. Mục đề chương 3</li>
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                </ul>
                {/* <button>Bài kiểm tra</button> */}
                </div>
                </div>
                <div className={styles.navBut}>
                <div className={styles.navButtons}>
                    <button>&lt; Quay lại</button>
                    <button>Bài tiếp theo &gt;</button>
                    </div>
                    <span className={styles.help}>Hỏi đáp</span>
                </div>
            <Footer/>
        </div>
    );
}
export default CourseDescription;
