import React, { useEffect, useState } from 'react'
export default function FilterCourse (props) {
    const [icon, setIcon]=useState(false);
    useEffect(()=>{
        if(props.languages.length>10){
            setIcon(true);
        }

    },[])
  return (
    <>
      <h4 style={{color:'#707070'}}>Filter Courses By </h4>
      <div className='d-flex gap-2 mb-3'>
        {icon && <button className='btn'>
          <i className='bi bi-arrow-left-circle'></i>
        </button>}
        <button className='btn btn-outline-secondary active-button fw-medium'>
          All language
        </button>
        {props.languages.map(language => (
          <button className='btn btn-outline-secondary border border-grey fw-medium text-dark'>{language}</button>
        ))}
        {icon && <button className='btn'>
          <i className='bi bi-arrow-right-circle'></i>
        </button>}
      </div>
    </>
  )
}
