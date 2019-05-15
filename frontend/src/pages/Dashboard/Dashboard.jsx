import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import mockCourseCard from '../../__mocks__/courseLink'

const Dashboard = () => {
  return (
    <section>
      <div className="courses">
        <CourseCard {...mockCourseCard} />
      </div>
    </section>
  )
}

export default Dashboard
