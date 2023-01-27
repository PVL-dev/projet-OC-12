import React from 'react';

const Activities = () => {
    return (
        <div className="activities-chart">
            <div className="activities-chart__text">
                <div className="activities-chart__text__title">
                    Activité quotidienne
                </div>
                <div className="activities-chart__text__legend">
                    <ul>
                        <li className="activities-chart__text__legend-weight">
                            <span className="black-dot">•</span>
                            <p>Poids (kg)</p>
                        </li>
                        <li className="activities-chart__text__legend-calories">
                            <span className="red-dot">•</span>
                            <p>Calories brulées (kCal)</p>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Activities;

