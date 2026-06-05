import React from 'react'
import HOC from './HOC';
import StudentProfile from './StudentProfile';
import NotificationBox from './NotificationBox';
import CourseCard from './CourseCard';
import './App.css';

export default function App() {

  const student = {
    Name: "Rahul",
    Batch: "React Beginners",
    Skill: "Components"
  };

  const course = {
        Course: "React Basics",
        Trainer: "Meena",
        Duration: "4 Weeks"
    };

  const message = "Assignment submission closes today at 6 PM.";

  const EnhancedStudentProfile = HOC(StudentProfile, "Student Profile", "lightpink");
  const EnhancedNotificationBox = HOC(NotificationBox, "Notification", "lightyellow");
  const EnhancedCourseCard = HOC(CourseCard, "Course Card", "lightblue");

  return (
    <div className="App">
      <EnhancedStudentProfile student={student} />
      <EnhancedCourseCard course={course} />
      <EnhancedNotificationBox message={message} />
    </div>
  )
}
