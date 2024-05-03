import React, { useState, useEffect } from 'react';
import './News.css';
import NewsPostItem from './NewsPostItem';
import CardFilter from './CardFilter';

function News() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange} />

            <div className='card-body pb-0'>
                <h5 className='card-title'>
                    News & Updates| <span>{filter}</span>
                </h5>
                <div className='news'>
                    {news.map(item => (
                        <NewsPostItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
