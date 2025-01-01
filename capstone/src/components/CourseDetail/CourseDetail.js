import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import styles from './CourseDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function CourseDetail() {
  const { id: courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

    const handleLearnClick = () => {
        navigate(`/learn/${course.id}`);
    };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          console.error('Không có token, vui lòng đăng nhập.');
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Fetch course details
        const courseResponse = await axios.get(`http://localhost:8080/api/v1/course/${courseId}`, { headers });
        setCourse(courseResponse.data);

        // Fetch lessons for the course
        const lessonsResponse = await axios.get(`http://localhost:8080/api/v1/lessons/course/${courseId}`, { headers });
        
        if (Array.isArray(lessonsResponse.data)) {
          setLessons(lessonsResponse.data);
        } else {
          setLessons([]);
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu khóa học:', error);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <h1>{course.courseName}</h1>
            <div className={styles.courseContent}>
              <h2>Nội dung khóa học</h2>
              <ul className={styles.lessonList}>
                {lessons.length > 0 ? (
                  lessons.map((lesson, index) => (
                    <li key={lesson.lessonId} className={styles.lessonItem}>
                      <strong>Bài học {index + 1}:</strong> {lesson.lessonContent}
                    </li>
                  ))
                ) : (
                  <li>No lessons available for this course.</li>
                )}
              </ul>
            </div>
          </div>
          <div className={styles.courseInfo}>
            <h3>Thông tin bài học</h3>
            <img src={course.image} alt={course.courseName} />
            <button
              className={styles.Button}
              // onClick={() => navigate(`/course/${course.courseId}`)}
              onClick={handleLearnClick}
            >
              Đăng ký học
            </button>
            <ul>
              <li><FontAwesomeIcon icon={faCheck} /><span>Giá: {course.coursePrice} VND</span></li>
              <li><FontAwesomeIcon icon={faCheck} /><span>Trạng thái: {course.status ? 'Active' : 'Inactive'}</span></li>
              <li><FontAwesomeIcon icon={faCheck} /><span>Instructor: {course.instructorId}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDetail;
