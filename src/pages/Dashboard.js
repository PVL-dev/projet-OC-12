import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../services/API-Rest';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import Activities from '../components/Activities';
import Sessions from '../components/Sessions';
import Performance from '../components/Performance';
import Score from '../components/Score';
import NutritionTile from '../components/NutritionTile';

/**
 * Generate dashboard in DOM
 *
 * The id is defined according to the number in the url, just after dashbaord/ .
 *
 * First, the data is fetched from the API (in API-REST.js)
 * If no data is retrieved from the api, we use the mocked data with same id.
 *
 * If the data is still not returned, the user is redirected on the error page.
 *
 * @param {object} userData Object with all user infos as { user, activity, averageSessions, performance }.
 * @component Dashboard page containing personnalized user sport statistics.
 */
const Dashboard = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    const [pageState, setPageState] = useState("Loading");
    const [errorData, setErrorData] = useState(null);
    
    const errorCheck = (error) => {
        console.log("Erreur API : ", error);
        setErrorData(error);
        setPageState("Error");
    };

    const responseCheck = (response) => {
        console.log("Données récupérées : ", response);
        if (response.user === undefined) {
            return errorCheck("Utilisateur inconnu");
        } else {
            setPageState("Dashboard");
            setUserData(response);
            return;
        };
    };

    const displayDatas = async () => {
        await getUserData(id)
        .then((response) => responseCheck(response))
        .catch((error) => errorCheck(error));
    };

    useEffect(() => {
        displayDatas();
        // eslint-disable-next-line
    }, []);

    const DashboardContent = () => {
        switch (pageState) {
        case "Loading":
            return <LoadingPage />;
        case "Error":
            return <ErrorPage data={errorData}/>;
        case "Dashboard":
            return (
                <div className="dashboard">
                    <div className="dashboard-container">
                        <div className="hello-container">
                            <div className="hello-container__title">
                                <h2>Bonjour</h2>
                                <h2 className="name">{userData.user.userInfos.firstName}</h2>
                            </div>
                            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
            
                        <div className="main-tiles-container">
                            <div className="graphs-container">
                                <div className="graphs-container__activities">
                                    <Activities data={userData.activity}/>
                                </div>
            
                                <div className="graphs-container__squares">
                                    <div className="graphs-container__squares__sessions">
                                        <Sessions data={userData.averageSessions}/>
                                    </div>
                                    <div className="graphs-container__squares__performance">
                                        <Performance data={userData.performance}/>
                                    </div>
                                    <div className="graphs-container__squares__score">
                                        <Score data={userData.user}/>
                                    </div>
                                </div>
                            </div>
            
                            <div className="nutrition-container">
                                <NutritionTile type="calories" data={userData.user.keyData}/>
                                <NutritionTile type="proteins" data={userData.user.keyData}/>
                                <NutritionTile type="carbohydrates" data={userData.user.keyData}/>
                                <NutritionTile type="fats" data={userData.user.keyData}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            console.log("Erreur Page Status");
        };
    };

    return <DashboardContent />;
};

export default Dashboard;

