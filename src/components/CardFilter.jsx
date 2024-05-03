import React from 'react';
import './dashboard.css'

function CardFilter({ filterChange }) {
    return (
        <div className='dashboard'>
            <div className='filter'>
                {/* Replaced <a> tags with <a> tags */}
                <a className='icon' onClick={() => filterChange('dropdown')} data-bs-toggle='dropdown'>
                    <i className='bi bi-three-dots'></i>
                </a>
                <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
                    <li className='dropdown-header text-start'>
                        <h6>Filter</h6>
                    </li>
                    <li>
                        {/* Removed redundant role='a' */}
                        <a className='dropdown-item' onClick={() => filterChange('Today')}>
                            Today
                        </a>
                    </li>
                    <li>
                        {/* Removed redundant role='a' */}
                        <a className='dropdown-item' onClick={() => filterChange('This Month')}>
                            This Month
                        </a>
                    </li>
                    <li>
                        {/* Removed redundant role='a' */}
                        <a className='dropdown-item' onClick={() => filterChange('This Year')}>
                            This Year
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CardFilter;
