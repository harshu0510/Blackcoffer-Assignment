import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
    PieChart
} from 'echarts/charts';
import {
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import 'echarts/lib/component/title';

// Register necessary components
echarts.use([PieChart, TooltipComponent, LegendComponent]);

function WebTrafficChart() {
    useEffect(() =>{
        const chart = echarts.init(document.querySelector('#trafficChart'));
        chart.setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '50',
                left: 'center',
            },
            series: [
                {
                    name: 'Access Form',
                    type:'pie',
                    radius: ['40%','70%'],
                    data:[
                        {
                            value: 1048,
                            name: 'Search Engine',
                        },
                        {
                            value: 735,
                            name: 'Direct',
                        },
                        {
                            value: 588,
                            name: 'Email',
                        },
                        {
                            value: 484,
                            name: 'Union Ads',
                        },
                        {
                            value: 385,
                            name: 'Video Ads',
                        },
                    ]
                }
            ]
        });
        return () => chart.dispose(); // Dispose the chart instance on unmount
    }, []);

    return (
        <div
            id='trafficChart'
            style={{minHeight: '480px'}}
            className='echart'
        ></div>
    );
}

export default WebTrafficChart;
