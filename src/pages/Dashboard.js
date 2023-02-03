import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Activities from '../components/Activities';
import Sessions from '../components/Sessions';
import Performance from '../components/Performance';
import Score from '../components/Score';
import NutritionTile from '../components/NutritionTile';
import { initFormatDatas, formattedDatas } from '../services/DatasFormater';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';

const Dashboard = () => {
    const {id} = useParams();
    const [pageState, setPageState] = useState("Loading");
    const displayDatas = async () => {
        await initFormatDatas(id);

        setPageState(formattedDatas.pageStatus);
        console.log("Page state :", pageState);
    };

    useEffect(() => {
        displayDatas();
    });


    const DashboardContent = () => {
        switch (pageState) {
        case "Loading":
            return <LoadingPage />;
        case "ErrorAPI":
            return <ErrorPage />;
        case "Dashboard":
            return (
                <div className="dashboard">
                    <div className="dashboard-container">
                        <div className="hello-container">
                            <div className="hello-container__title">
                                <h2>Bonjour</h2>
                                <h2 className="name">{formattedDatas.userInfos.firstName}</h2>
                            </div>
                            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
            
                        <div className="main-tiles-container">
                            <div className="graphs-container">
                                <div className="graphs-container__activities">
                                    <Activities data={formattedDatas.activities}/>
                                </div>
            
                                <div className="graphs-container__squares">
                                    <div className="graphs-container__squares__sessions">
                                        <Sessions data={formattedDatas.sessions}/>
                                    </div>
                                    <div className="graphs-container__squares__performance">
                                        <Performance data={formattedDatas.performance}/>
                                    </div>
                                    <div className="graphs-container__squares__score">
                                        <Score data={formattedDatas.todayScore}/>
                                    </div>
                                </div>
                            </div>
            
                            <div className="nutrition-container">
                                <NutritionTile type="calories" data={formattedDatas.keyData}/>
                                <NutritionTile type="proteins" data={formattedDatas.keyData}/>
                                <NutritionTile type="carbohydrates" data={formattedDatas.keyData}/>
                                <NutritionTile type="fats" data={formattedDatas.keyData}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            console.log("Erreur");
        };
    };

    return <DashboardContent />;
};

export default Dashboard;

