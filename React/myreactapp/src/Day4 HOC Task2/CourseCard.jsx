import React from 'react'

export default function CourseCard({ course }) {
    
    return (
        <div className="course-card">
            <h2>{course.Course}</h2>
            <p>Trainer: {course.Trainer}</p>
            <p>Duration: {course.Duration}</p>
        </div>
  )
}
