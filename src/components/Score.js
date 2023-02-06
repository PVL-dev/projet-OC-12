import React from 'react';
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar, Legend } from 'recharts';
import DatasFormater from '../services/DatasFormater';

const Score = ({data}) => {
    const recoverDatas = new DatasFormater();
    const datas = recoverDatas.scoreDatas(data);

    const CustomLegend = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className="container-legend-score">
                    <p className="text-percentage">{payload[0].payload.value}%</p>
                    <p className="text-p">de votre</p>
                    <p className="text-p">objectif</p>
                </div>
            );
        };
    };

    return (
        <React.Fragment>
            <div className="score-chart__background"></div>

            <ResponsiveContainer className="score-chart__graph" width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={datas}
                    startAngle={90}
                    endAngle={450}
                >
                    <text
                        className="text-title"
                        x="30"
                        y="30"
                        textAnchor="start"
                        dominantBaseline="hanging"
                    >
                        Score
                    </text>

                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />

                    <RadialBar 
                        background={false}
                        dataKey="score"
                        cornerRadius={'60%'}
                    />

                    <Legend 
                        verticalAlign="middle"
                        content={CustomLegend}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default Score;

