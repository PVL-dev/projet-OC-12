import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../services/API-Rest';
import Activities from '../components/Activities';
import Duration from '../components/Duration';
import Radar from '../components/Radar';
import Score from '../components/Score';
import NutritionTile from '../components/NutritionTile';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [pageState, setPageState] = useState('Loading');
    const errorCheck = (error) => {
        console.log("Erreur API : ", error);
        setPageState("ErrorAPI");
    };

    const responseCheck = (response) => {
        console.log("Données récupérées : ", response);
        if (response.user === undefined) {
            return errorCheck("Utilisateur inconnu");
        } else {
            setUserData(response);
            setPageState("Dashboard");
        }
    };

    const {id} = useParams();

    useEffect(() => {
        getUserData(id)
        .then((res) => responseCheck(res))
        .catch((err) => errorCheck(err));
        }
    );


    function DashboardContent() {
        switch (pageState) {
        case "Loading":
            return ;
        case "ErrorAPI":
            return ;
        case "Dashboard":
            return (
                <div className="dashboard-container">
                    <div className="hello-container">
                        <h2>Bonjour {userData.user.userInfos.firstName}</h2>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
        
                    <div className="main-tiles-container">
                        <div className="graphs-container">
                            <div className="graphs-container__activities">
                                <Activities data={userData.activity} />
                            </div>
        
                            <div className="graphs-container__squares">
                                <div className="graphs-container__squares__duration">
                                    <Duration data={userData.averageSessions} />
                                </div>
                                <div className="graphs-container__squares__radar">
                                    <Radar data={userData.performance} />
                                </div>
                                <div className="graphs-container__squares__score">
                                    <Score data={userData.user.todayScore} />
                                </div>
                            </div>
                        </div>
        
                        <div className="nutrition-container">
                            <NutritionTile type="calories" data={userData.user.keyData} />
                            <NutritionTile type="proteins" data={userData.user.keyData} />
                            <NutritionTile type="carbohydrates" data={userData.user.keyData} />
                            <NutritionTile type="fats" data={userData.user.keyData} />
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

