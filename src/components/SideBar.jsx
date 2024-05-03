import React from 'react'
import './sideBar.css'
import navList from '../data/navItem'

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
    <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href='/'>
                <i className='bi bi-grid'></i>  
                <span>Dashboard</span>
            </a>
        </li>
        <li className='nav-item'>
            <a className='nav-link collapsed' data-bs-toggle='collapse' href='#components-nav'>
                <i className='bi bi-menu-button-wide'></i>
                <span>Documents</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='components-nav' className='nav-content collapse'>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Product</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Manage Review</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Referrals</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Setting</span>
                    </a>
                </li>
            </ul>
        </li>
        <li className='nav-item'>
            <a className='nav-link collapsed' data-bs-toggle='collapse' href='#forms-nav'>
                <i className='bi bi-journal-text'></i>
                <span>Forms</span>
                <i className='bi bi-chevron-down ms-auto'></i>   
            </a>
            <ul id='forms-nav' className='nav-content collapse'>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Application Form</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Release Form</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Cancellation Form</span>
                    </a>
                </li>
            </ul>
        </li>
        <li className='nav-item'>
            <a className='nav-link collapsed' data-bs-toggle='collapse' href='#tables-nav'>
                <i className='bi bi-layout-text-window-reverse'></i>
                <span>Tables</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='tables-nav' className='nav-content collapse'>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>General Tables</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Data Tables</span>
                    </a>
                </li>
            </ul>
        </li>
        <li className='nav-item'>
            <a className='nav-link collapsed' data-bs-toggle='collapse' href='#charts-nav'>
                <i className='bi bi-bar-chart'></i>
                <span>Charts</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='charts-nav' className='nav-content collapse'>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Chart.js</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>ApexCharts</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='bi bi-circle'></i>
                        <span>Echarts</span>
                    </a>
                </li>
            </ul>
        </li>

         <li className='nav-heading'>Pages</li>
         {navList.map(nav=>(
            <li className='nav-item' key={nav._id}>
                <a className='nav-link collapsed' href='#'>
                    <i className={nav.icon}></i>
                    <span>{nav.name}</span>
                </a>
            </li>
         ))}
    </ul>
</aside>


  )
}

export default SideBar
