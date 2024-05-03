import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <footer id='footer' className='footer'>
    <div className='copyright'>
    &copy; Copyright{''}
    <strong>
    <span>  Harsh Visulization Dashboard  </span>
    </strong>
    .All Right Reserved
    </div>
    <div className='credits'>
        {/* Designed by <a href='#'>Harsh</a> */}
    </div>
   </footer>
  );
}

export default Footer
