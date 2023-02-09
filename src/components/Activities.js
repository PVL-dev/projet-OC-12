import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, Legend } from 'recharts';
import DatasFormater from '../services/DatasFormater';
import PropTypes from 'prop-types';

/**
 * Activities chart
 * 
 * @param {object} data Object as { userId, sessions[{ day, kilogram, calories }] }
 * @component Generated activities bar chart with last 7 days datas of user
 */
const Activities = ({ data }) => {
    const recoverDatas = new DatasFormater();
    const datas = recoverDatas.activitiesDatas(data);
    
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
                <BarChart width="100%" height="100%" data={datas}>
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
                        dataKey={"kilos"}
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

Activities.propTypes = {
    data: PropTypes.object.isRequired
};

