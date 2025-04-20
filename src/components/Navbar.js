import React from 'react'
import { Link } from 'react-router'

export default function Navbar () {
  return (
    <nav className='navbar p-3 justify-content-between left'>
      <div>
        <Link className='navbar-brand active' to='/'>
          Paid Courses
        </Link>
        <Link className='navbar-brand' to='/offers'>
          Combo Courses
        </Link>
        <Link className='navbar-brand' to='/freelibrary'>
          Free Courses
        </Link>
      </div>

      <div className='d-flex gap-3'>
        <button className='btn btn-outline-secondary btn-sm'>
          Sort By <i className='bi bi-chevron-down'></i>
        </button>
        <button className='btn btn-outline-secondary btn-sm'>
          Explore <i className='bi bi-chevron-down'></i>
        </button>
        <div>
          <form className='d-flex'>
            <button className='btn'>
              <i className='bi bi-search'></i>
            </button>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search for anything'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
    </nav>
  )
}
