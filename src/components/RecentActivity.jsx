import React, { useState, useEffect } from 'react';
import './Recentactivity.css'
import CardFilter from './CardFilter';
import RecentActivityItem from './RecentActivityItem';

function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:3000/recentactivity')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='card'>
          <CardFilter filterChange={handleFilterChange} />
          <div className='card-body'>
            <h5 className='cart-title'>
              Recent Activity | <span className='text-muted'>{filter}</span>
            </h5>
            {items.length === 0 ? (
              <p>Loading recent activity...</p>
            ) : (
              <div className='activity'>
                {items &&
                  items.map(item => (
                    <RecentActivityItem key={item.id} item={item} />
                  ))}
              </div>
            )}
          </div>
        </div>
      );
      
}

export default RecentActivity;
