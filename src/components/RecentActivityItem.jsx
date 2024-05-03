import React from 'react';


function RecentActivityItem({ item }) {
    return (
        <div className='activity-item d-flex'>
            <div className='activate-lable '>{item.time}</div>
            <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>
            <div className='activity-content'>
                {item.highlight === '' ? (
                    <div className="activity-content">{item.content}</div>
                ) : (
                    <div className="activity-content">
                        {item.content.substring(0, item.content.indexOf(item.highlight))}
                        <span className='fw-bold text-dark'>{item.highlight}</span>
                        {item.content.slice(
                            item.content.indexOf(item.highlight) + item.highlight.length,
                            -1
                        )}
                  </div>
                )}
            </div>
        </div>
    );
}

export default RecentActivityItem;
