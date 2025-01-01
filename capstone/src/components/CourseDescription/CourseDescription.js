import React, { useEffect, useState } from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

function CourseDescription() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [lessonData, setLessonData] = useState(null);

    useEffect(() => {
        const fetchLessonData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/v1/lessons/course/${courseId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setLessonData(response.data);
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };

        fetchLessonData();
    }, [courseId]);

    if (!lessonData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.Container}>
                <div className={styles.mainContent}>
                    <div className={styles.lessonHeader}>{lessonData.lessonName}</div>
                    <div className={styles.lesson}>
                        <video controls>
                            <source src={lessonData.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.lessonTitle}>
                        <h2>{lessonData.lessonName}</h2>
                        <span>Duration: {lessonData.lessonDuration}</span>
                        <a href="#">
                            <FontAwesomeIcon icon={faPencil} />
                        </a>
                    </div>
                    <div className={styles.lessonContent}>
                        <p>{lessonData.lessonContent}</p>
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <h3>Lesson Progress</h3>
                    <ul>
                        <li>Lesson: {lessonData.lessonName}</li>
                        {/* Add more navigation or related lessons here */}
                    </ul>
                </div>
            </div>
            <div className={styles.navBut}>
                <div className={styles.navButtons}>
                    <button onClick={() => navigate(-1)}>&lt; Back</button>
                    <button>Next Lesson &gt;</button>
                </div>
                <span className={styles.help}>Ask a question</span>
            </div>
            <Footer />
        </div>
    );
}

export default CourseDescription;
