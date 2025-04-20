import React, { useState } from 'react'
import data from '../assets/courses.json'
import FilterCourse from './FilterCourse'

export default function FreeCourses () {
  const languages = [
    'English',
    'Tamil',
    'Hindi',
    'Telugu',
    'Malayalam',
    'Kannada',
    'Kannada',
    'Bengali'
  ]
  const [courses, setCourses] = useState(data.slice(0, 8))

  function handleClick () {
    setCourses(data.slice(0, courses.length + 8))
  }

  return (
    <div className='p-3 left'>
      <FilterCourse languages={languages} />
      <div className='d-flex flex-wrap gap-4'>
        {courses.map(course => (
          <div className='card shadow' style={{ width: `20rem` }}>
            <img
              src={course.cardImg}
              className='card-img-top'
              alt={course.cardImgText}
            />
            <div className='card-body'>
              <button
                className='btn btn-primary position-absolute w-25'
                style={{ top: '9rem' }}
              >
                Free
              </button>
              <h3 className='card-text'>{course.courseHeading}</h3>
              <div className='pt-3 px-3 font-13'>
                <span>
                  <i className='bi bi-clock'></i> {course.duration} &nbsp;
                </span>
                <span>
                  <i className='bi bi-globe2'></i> {course.language}
                </span>
              </div>
              <div className='pt-1 px-3'>
                <span className='active-sidebar'>
                  ₹ {course.discountedPrice} /-
                </span>
                <del>₹ {course.actualPrice} /-</del>
              </div>
            </div>
            <div className='card-disclaimer card-footer'>
              {course.disclaimer}
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button
          className='btn btn-outline-secondary btn-sm mt-2 '
          onClick={() => handleClick()}
        >
          View More
        </button>
      </div>
    </div>
  )
}
