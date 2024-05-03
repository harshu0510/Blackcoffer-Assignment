// BudgetReport.jsx
import React, { useState } from 'react';
import BudgetcChart from './BudgetcChart';
import CardFilter from './CardFilter';

function BudgetReport() {
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    };

    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className="card-title">
                    Budget Report | <span>{filter}</span>
                </h5>
                <BudgetcChart filter={filter} />
            </div>
        </div>
    );
}

export default BudgetReport;
