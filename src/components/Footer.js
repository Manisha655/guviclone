import React from 'react'
import Logo from './Logo'
import logo from '../assets/footer-logo.webp'

export default function Footer () {
  return (
    <footer className='mt-3 ms-5 ps-5 bg-dark text-white'>
      <div className='d-flex pt-5 justify-content-center gap-5'>
        <div className='d-flex flex-column gap-3'>
          <h5 className='text-white'>Zen Class</h5>

          <div>Full Stack Development </div>
          <div>Automation & Testing</div>
          <div>Data Science</div>
          <div>UI/UX</div>
          <div>DevOps</div>
          <div>Data Engineering</div>
          <div>Business Analytics with Digital Marketing</div>
          <div>All Programs</div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <h5 className='text-white'>Popular Courses</h5>

          <div> Python - IIT-M Pravartak Certified</div>
          <div>Java</div>
          <div>Mobile Hacking</div>
          <div>C Programming</div>
          <div>AWS</div>
          <div>Angular</div>
          <div>Dark Web</div>
          <div>All Courses</div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <h5 className='text-white'>Self-Paced Courses</h5>

          <div>Premium Pass</div>
          <div>Paid Courses</div>
          <div>Free Courses</div>
          <div>Combos</div>

          <h5 className='text-white mt-3'>Practice Platforms</h5>

          <div>CodeKata</div>
          <div>WebKata</div>
          <div>SQLKata</div>
          <div>Debugging</div>
          <div>IDE</div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <h5 className='text-white'>Products</h5>

          <div>HackerKID</div>
          <div>Placement Preparation</div>
          <div>GUVI for Corporates</div>

          <h5 className='text-white mt-3'>Resources</h5>

          <div>Success Stories</div>
          <div>New</div>
          <div>Learn Hub</div>
          <div>Blog</div>
          <div>Web Stories</div>
          <div>Rewards</div>
          <div>Refer a friend</div>
          <div>Become an Affidivate</div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <h5 className='text-white'>Company</h5>

          <div> Refund Policy</div>
          <div>FAQs</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </div>
      </div>
      <div className='border-bottom border-white pt-5'></div>
      <div className='d-flex pt-5 justify-content-center gap-5'>
        <div style={{ width: '60%' }}>
          <div>
            <Logo logo={logo} />
          </div>
          <div>
            GUVI (Grab Your Vernacular Imprint) Geek Network Private Limited is
            a leading online learning and skills development company, incubated
            by IIT Madras and IIM Ahmedabad.
          </div>
          <div>
            Established in 2014 and acquired by the HCL Group in 2022, GUVI is
            dedicated to providing effective and high-quality learning and
            skilling programs that transcend language barriers in technology
            education. GUVI today is trusted by over 3 million learners and
            2000+ corporate partners.
          </div>
        </div>
        <div className='d-flex flex-column  gap-3'>
          <h5 className='text-white'>Follow us on</h5>
          <div className='d-flex gap-3'>
            <img
              src='https://www.guvi.in/assets/DpDJVw-s-facebook.webp'
              alt='facebook'
              width='40'
              height='40'
            />
            <img
              src='https://www.guvi.in/assets/CgqVvrZ9-instagram.webp'
              alt='instagram'
              width='40'
              height='40'
            />
            <img
              src='https://www.guvi.in/assets/DoUuF0af-linkedin.webp'
              alt='linkedin'
              width='40'
              height='40'
            />
          </div>
          <div className='d-flex gap-3'>
            <img
              src='https://www.guvi.in/assets/Df_J19ru-twitter.webp'
              alt='twitter'
              width='40'
              height='40'
            />
            <img
              src='https://www.guvi.in/assets/C6Exv61E-telegram.webp'
              alt='telegram'
              width='40'
              height='40'
            />
            <img
              src='https://www.guvi.in/assets/P0wSDXgo-youtube.webp'
              alt='youtube'
              width='40'
              height='40'
            />
          </div>
        </div>
        <div className='d-flex flex-column gap-2'>
          <button className='btn'>
            <img
              src='https://www.guvi.in/assets/W3f-xw2p-app-store.webp'
              alt='app'
              width='132'
              height='42'
            />
          </button>
          <button className='btn'>
            <img
              src='https://www.guvi.in/assets/CBovHX22-google-play.webp'
              alt='google'
              width='132'
              height='42'
            />
          </button>
          <button className='btn btn-secondary bg-transparent'>
            {' '}
            Refer & Earn
          </button>
        </div>
      </div>
      <div className='border-bottom border-white pt-5'></div>
      <div className='d-flex gap-3 justify-content-end '>
        <div> Terms and Conditions</div>
        <div>Privacy Policy</div>
        <div> &copy; GUVI Geeks Network Pvt. Ltd.</div>
      </div>
    </footer>
  )
}
