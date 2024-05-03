import React from 'react'
import './nav.css'


function Navmessages() {
  return (
    <li className='nav-item dropdown'>
    <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
            <a href='#'>
                <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    View all
                </span>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>
        <li className='messages-item'>
            <a href='#'>
                <img src='assets/img/message-1.jpg' alt="" className='rounded-circle'>
                </img>
                <div>
                    <h6>Harsh Tiwari</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicit...</p>
                    <p>6 hrs. ago</p>
                </div>
            </a>
        </li>

        <li>
            <hr className='dropdown-divider'/>
        </li>
        <li className='messages-item'>
            <a href='#'>
                <img src='assets/img/message-1.jpg' alt="" className='rounded-circle'>
                </img>
                <div>
                    <h6>Harsh Tiwari</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicit...</p>
                    <p>6 hrs. ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>
        <li className='messages-item'>
            <a href='#'>
                <img src='assets/img/message-1.jpg' alt="" className='rounded-circle'>
                </img>
                <div>
                    <h6>Harsh Tiwari</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicit...</p>
                    <p>6 hrs. ago</p>
                </div>
            </a>
        </li>
     

        <li>
            <hr className='dropdown-divider'/>
        </li>
        <li className='dropdown-footer'>
            <a href='#'>Show all messages</a>
        </li>
    </ul>
</li>

  );
}

export default Navmessages;
