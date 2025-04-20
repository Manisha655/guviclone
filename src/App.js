import { Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PaidCourses from './components/PaidCourses'
import ComboCourses from './components/ComboCourses'
import FreeCourses from './components/FreeCourses'
import Sidebar from './components/Sidebar'
import FilterCourse from './components/FilterCourse'
import BrowseCategories from './components/BrowseCategories'
import Footer from './components/Footer'

function App () {
 const languages = [
  'English',
  'Tamil',
  'Hindi',
  'Telugu',
  'Malayalam',
  'Kannada',
  'Bengali',
  'Hindi',
  'Telugu',
  'Malayalam',
  'Kannada',
  'Bengali'
]

  return (
    <div className='App'>
      <Header />
      <Sidebar/>
      <Banner />
      <Navbar />
      {/* <hr className='hr hr-blurry' /> */}
      <Routes>
        <Route path='/' element={<PaidCourses />} />
        <Route path='/offers' element={<ComboCourses />} />
        <Route path='/freelibrary' element={<FreeCourses />} />
      </Routes>
      <div className='p-3 left'>
      <FilterCourse languages={languages}/>
      <BrowseCategories />
   
      </div>
     <Footer />

    </div>
  )
}

export default App
