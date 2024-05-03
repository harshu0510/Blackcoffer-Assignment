import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function BudgetcChart({ filter }) {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartElement = chartRef.current;
        const chart = echarts.init(chartElement);

        chart.setOption({
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            radar: {
                shape: 'circle',
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Report', max: 30000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        }
                    ]
                }
            ]
        });

        window.addEventListener('resize', () => {
            chart.resize();
        });

        return () => {
            chart.dispose();
            window.removeEventListener('resize', () => {
                chart.resize();
            });
        };
    }, [filter]);

    return <div className="budgetChart" ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}

export default BudgetcChart;
