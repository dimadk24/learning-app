import React from 'react'
import CourseItem from '../../components/CourseItem/CourseItem'
import mockCourse from '../../__mocks__/courseItem'

const Dashboard = () => {
  return (
    <section>
      <div className="courses">
        <CourseItem {...mockCourse} />
      </div>
    </section>
  )
}

export default Dashboard
