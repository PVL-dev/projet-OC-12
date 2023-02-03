import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const Performance = () => {
    const data = [
        {subject: "Intensité", value: "30"},
        {subject: "Vitesse", value: "40"},
        {subject: "Force", value: "50"},
        {subject: "Endurance", value: "30"},
        {subject: "Énergie", value: "30"},
        {subject: "Cardio", value: "50"}
    ]

    return (
        <ResponsiveContainer className="performance-chart__graph" width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="68%" data={data}>
                <PolarGrid stroke="white" />
                <PolarAngleAxis
                    stroke="white"
                    dataKey={"subject"}
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

