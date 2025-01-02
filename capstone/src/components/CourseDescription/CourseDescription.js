import React, { useEffect, useState } from 'react';
import styles from './CourseDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';

function CourseDescription() {
    const { courseId } = useParams(); // Get courseId from the URL params
    const navigate = useNavigate();
    const [lessonData, setLessonData] = useState(null);
    const [allLessons, setAllLessons] = useState([]); // State to hold all lessons data

    useEffect(() => {
        const fetchLessonData = async () => {
            try {
                const token = localStorage.getItem('token'); // Get JWT token
                const response = await axios.get(`http://localhost:8080/api/v1/lessons/course/${courseId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in the request header
                    },
                });
                setLessonData(response.data[0]); // Assuming first lesson for main content
                setAllLessons(response.data); // Set all lessons data for the sidebar
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };

        fetchLessonData();
    }, [courseId]);

    if (!lessonData || !allLessons.length) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    // Function to handle next lesson navigation
    const handleNextLesson = () => {
        const currentIndex = allLessons.findIndex(lesson => lesson.lessonId === lessonData.lessonId);
        const nextLesson = allLessons[currentIndex + 1];
        if (nextLesson) {
            navigate(`/learn/${nextLesson.lessonId}`); // Navigate to next lesson
        } else {
            alert("You have completed all lessons in this course.");
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.Container}>
                <div className={styles.mainContent}>
                    <div className={styles.lessonHeader}></div>
                    <div className={styles.lesson}>
                        {/* Display lesson video */}
                        {lessonData.video ? (
                            <video controls>
                                <source src={lessonData.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div>No video available for this lesson.</div>
                        )}
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

                {/* Sidebar with list of all lessons */}
                <div className={styles.sidebar}>
                    <h3>Lesson Progress</h3>
                    <ul>
                        {allLessons.map((lesson, index) => (
                            <li key={lesson.lessonId}>
                                <a href="#" onClick={() => navigate(`/learn/${lesson.lessonId}`)}>
                                <strong>Bài học {index + 1}:</strong>{lesson.lessonName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.navBut}>
                <div className={styles.navButtons}>
                    <button onClick={() => navigate(-1)}>&lt; Back</button>
                    <button onClick={handleNextLesson}>Next Lesson &gt;</button>
                </div>
                <span className={styles.help}>Ask a question</span>
            </div>
            <Footer />
        </div>
    );
}

export default CourseDescription;
