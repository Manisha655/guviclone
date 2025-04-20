import React, { useState } from 'react'
import logo from '../assets/browse.png'

export default function BrowseCategories () {
  const coursesData = [
    'Autocad',
    'Blockchain',
    'Business and Management',
    'Data Science',
    'Databases',
    'Cloud Computing',
    'Game Development',
    'IT and Software',
    'Marketing',
    'Mechanical Design',
    'Networking',
    'Professional Development',
    'Programming'
  ]
  const [courses, setCourses] = useState(coursesData.slice(0, 6))

  function handleNextClick (){
setCourses(coursesData.slice(courses.length,courses.length+6))
  }
  function handlePrevClick () {
  setCourses(coursesData.slice(courses.length-6, courses.length ))
}



  return (
    <>
      <h3 className='pt-3' style={{ color: '#707070' }}>
        Browse courses by Categories
      </h3>
      <div className='d-flex flex-wrap gap-2'>
        <button className='btn  ' onClick={()=>handlePrevClick()}>
          <i className='bi bi-arrow-left-circle'></i>
        </button>
{courses && courses.map(course=>
        <div
          className='card rounded justify-content-center'
          style={{ width: '13rem' }}
        >
          <img className='rounded' src={logo} alt='' />
          <p className='position-absolute text-white fw-bold browse-content'>{course}</p>
        </div>)}

        <button className='btn' onClick={()=>handleNextClick()}>
          <i className='bi bi-arrow-right-circle'></i>
        </button>
      </div>
    </>
  )
}
