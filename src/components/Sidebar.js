import React from 'react'

export default function Sidebar () {
  return (
    <nav className='sidebar shadow bg-white h-100 fixed-top' style={{top:'6.2rem'}}>
      <ul className='d-flex flex-column gap-3 mt-3'>
        <li className='active-sidebar'>
          <i class='bi bi-play-btn'></i> <span> Courses </span>
        </li>
        <hr />

        <li>
          <i class='bi bi-file-earmark-code'></i>
          <span> CodeKata</span>
        </li>
        <li>
          <i class='bi bi-window-dock'></i>
          <span> WebKata</span>
        </li>
        <li>
          <i class='bi bi-calculator'></i>
          <span> Debugging</span>
        </li>

        <li>
          <i class='bi bi-code'></i>
          <span> IDE</span>
        </li>
        <hr />

        <li>
          <i class='bi bi-mortarboard'></i>
          <span> Leaderboard</span>
        </li>
        <li>
          <i class='bi bi-gift'></i>
          <span> Rewards</span>
        </li>
        <li>
          <i class='bi bi-pci-card-sound'></i>
          <span> Referrals </span>
        </li>
      </ul>
    </nav>
  )
}
