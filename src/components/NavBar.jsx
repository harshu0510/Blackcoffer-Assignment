import React from 'react'
import NavNotice from './NavNotice'
import NavAvtar from './NavAvtar'
import NavMessage from './NavMessage'

function NavBar() {
  return (
   <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
        <NavNotice/>
        <NavMessage/>
        <NavAvtar/>
    </ul>

   </nav>
  )
}

export default NavBar
