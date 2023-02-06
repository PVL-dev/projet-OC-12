import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import DatasFormater from '../services/DatasFormater';

const Performance = ({data}) => {
    const recoverDatas = new DatasFormater();
    const datas = recoverDatas.performanceDatas(data);

    return (
        <ResponsiveContainer className="performance-chart__graph" width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="68%" data={datas}>
                <PolarGrid stroke="white" />
                <PolarAngleAxis
                    stroke="white"
                    dataKey={"category"}
                    tick={{ fontSize: '10px' }}
                    tickLine={false}
                />
                <Radar
                    name="Performance"
                    dataKey={"value"}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default Performance;

