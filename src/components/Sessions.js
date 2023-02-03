import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, Rectangle } from 'recharts';

const Sessions = () => {
    const data = [
        {abbreviatedDay: "L", duration: "30"},
        {abbreviatedDay: "M", duration: "40"},
        {abbreviatedDay: "M", duration: "50"},
        {abbreviatedDay: "J", duration: "30"},
        {abbreviatedDay: "V", duration: "30"},
        {abbreviatedDay: "S", duration: "50"},
        {abbreviatedDay: "D", duration: "50"}
    ]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
              <div className="custom-tooltip">
                <p className="custom-tooltip__kilos">{`${payload[0].value} min`}</p>
              </div>
            );
        };
    };
    const CustomCursor = (props) => {
        if (props) {
            const { points, width, height } = props;
            const { x, y } = points[0];
            return (
                <Rectangle
                    fill={"#00000033"}
                    x={x}
                    y={y}
                    width={width}
                    height={height * 2}
                />
            );
        };
    };
    
    return (
        <ResponsiveContainer className="sessions-chart__graph" width="100%" height="100%">
            <LineChart width="100%" height="100%" data={data} margin={0}>
                <XAxis
                    dataKey={"abbreviatedDay"}
                    axisLine={false}
                    tickLine={false}
                    width={20}
                    tick={{ fontSize: '10px', fill: 'white' }}
                    dy={-10}
                    //padding={{ left: 20, right: 20 }}
                    interval="preserveStartEnd"
                />
                <YAxis 
                    hide={true}
                    domain={["dataMin-10", "dataMax+20"]}
                    padding={{bottom : 50, top: 30}}
                />

                <defs>
                    <linearGradient id="linearGradient">
                        <stop offset="0%" stopColor="#FFFFFF67"/>
                        <stop offset="100%" stopColor="#FFFFFF"/>
                    </linearGradient>
                </defs>
                <Line
                    type="monotone"
                    dataKey={"duration"}
                    stroke="url(#linearGradient)"
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={{
                        stroke: "rgba(255, 255, 255, 0.4)",
                        strokeWidth: 5
                    }}
                />

                <text
                    x="35"
                    y="30"
                    textAnchor="start"
                    dominantBaseline="hanging"
                    className="line1"
                    fill="white"
                >
                Durée moyenne des
                </text>

                <text
                    x="35"
                    y="50"
                    textAnchor="start"
                    dominantBaseline="hanging"
                    className="line2"
                    fill="white"
                >
                sessions
                </text>

                <Tooltip
                    content={<CustomTooltip />}
                    wrapperStyle={{ outline: 'none' }}
                    cursor={<CustomCursor />}
                    isAnimationActive={true}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Sessions;

