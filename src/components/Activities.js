import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, Legend } from 'recharts';

const Activities = () => {
    const data = [
        {day: "1", kilogram: "70", calories: "240"},
        {day: "2", kilogram: "69", calories: "220"},
        {day: "3", kilogram: "70", calories: "280"},
        {day: "4", kilogram: "70", calories: "500"},
        {day: "5", kilogram: "69", calories: "160"},
        {day: "6", kilogram: "69", calories: "162"},
        {day: "7", kilogram: "69", calories: "390"},
        {day: "8", kilogram: "68", calories: "350"},
        {day: "9", kilogram: "69", calories: "310"},
        {day: "10", kilogram: "70", calories: "340"}
    ]
    
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
              <div className="custom-tooltip">
                <p className="custom-tooltip__kilos">{`${payload[0].value}kg`}</p>
                <p className="custom-tooltip__calories">{`${payload[1].value}kcal`}</p>
              </div>
            );
        };
    };

    const CustomLegend = () => {
        return (
            <div className="text">
                <div className="text__title">
                    Activité quotidienne
                </div>
                <ul className="text__legend">
                    <li className="text__legend-weight">
                        <span className="black-dot">•</span>
                        <p>Poids (kg)</p>
                    </li>
                    <li className="text__legend-calories">
                        <span className="red-dot">•</span>
                        <p>Calories brulées (kCal)</p>
                    </li>
                </ul>
            </div>
        );
    }; 

    return (
        <div className="activities-chart">
            <ResponsiveContainer className="activities-chart__graph" width="100%" height="100%">
                <BarChart width="100%" height="100%" data={data}>
                

                    <Legend
                        
                        verticalAlign="top"
                        content={CustomLegend}
                    />
                    <XAxis
                        dataKey={"day"}
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                    />
                    <YAxis
                        orientation="left"
                        axisLine={false}
                        tickLine={false}
                        yAxisId="kilos"
                        domain={["dataMin - 2", "dataMax + 2"]}
                    />
                    <YAxis
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        yAxisId="calories"
                    />
                    <CartesianGrid vertical={false} strokeDasharray="4 4"/>
                    <Bar
                        className="recharts-bar-kilos"
                        dataKey={"kilogram"}
                        barSize={6}
                        radius={[10, 10, 0, 0]}
                        yAxisId="kilos"
                    />
                    <Bar
                        className="recharts-bar-calories"
                        dataKey={"calories"}
                        barSize={6}
                        radius={[10, 10, 0, 0]}
                        yAxisId="calories"
                    />
                    <Tooltip
                        content={CustomTooltip}
                        wrapperStyle={{ outline: 'none' }}
                        cursor={{ fill: 'gray', opacity: 0.1 }}
                        allowEscapeViewBox={{x: true}}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Activities;


/* 
ResponsiveContainer = Container général Responsive.
BarChart = Container général du graphique.
Bar = Barres, une barre kilo + une barre calories (x10).
YAxis = Axe des Y (Kilos).
XAxis = Axe des X (Calories).
CartesianGrid = Grille de background qui correspond à l'axe des Y (Kilos).
ToolTip = Affichage des données au Hover (Petite fenêtre en superposition).
*/

