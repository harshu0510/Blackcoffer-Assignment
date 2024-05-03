// RecentSalesTable.js

import React from 'react';
import './RecentSalesTable.css';

function RecentSalesTable({ items }) {
    const handleStatus = (status) => {
        switch (status) {
            case 'Approved':
                return 'success';
            case 'Pending':
                return 'warning';
            case 'Rejected':
                return 'danger';
            default:
                return 'success';
        }
    };

    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
                <tr>
                    <th scope='row'>#</th>
                    <th scope='row'>Customer</th>
                    <th scope='row'>Product</th>
                    <th scope='row'>Price</th>
                    <th scope='row'>Status</th>
                </tr>
            </thead>
            <tbody>
                {items && items.length > 0 &&
                    items.map(item => (
                        <tr key={item.id}>
                            <td scope='row'>
                                <a href='#'>{item.number}</a>
                            </td>
                            <td scope='row'>{item.customer}</td>
                            <td scope='row'>
                                <a href='#' className='text-primary'>
                                    {item.product}
                                </a>
                            </td>
                            <td scope='row'>${item.price.toFixed(2)}</td>
                            <td scope='row'>
                                <span className={`badge badge-bg-${handleStatus(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default RecentSalesTable;
