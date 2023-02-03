import { getUserData } from '../services/API-Rest';

export class formattedDatas {
    constructor (
        pageStatus, 
        id, 
        userInfos, 
        activities, 
        sessions, 
        performance, 
        todayScore, 
        keyData) {
        this.pageStatus = pageStatus;
        this.id = id;
        this.userInfos = userInfos;
        this.activities = activities;
        this.sessions = sessions;
        this.performance = performance;
        this.todayScore = todayScore;
        this.keyData = keyData;
    }


};

const errorCheck = (error) => {
    console.log("Erreur API : ", error);
    formattedDatas.pageStatus = "ErrorAPI";
};
const responseCheck = (response) => {
    console.log("Formater recup : ", response);
    if (response.user === undefined) {
        return errorCheck("Utilisateur inconnu");
    } else {
        formattedDatas.pageStatus = "Dashboard";
        finalFormatDatas(response);
        return;
    };
};

export const initFormatDatas = async (id) => {
    await getUserData(id)
    .then((response) => responseCheck(response))
    .catch((error) => errorCheck(error));
};

const finalFormatDatas = (response) => {
    formattedDatas.id = response.user.id;
    formattedDatas.userInfos = response.user.userInfos;
    formattedDatas.activities = response.activity.sessions;
    formattedDatas.sessions = response.averageSessions.sessions;
    formattedDatas.performance = response.performance.data;
    formattedDatas.score = response.user.score;
    formattedDatas.keyData = response.user.keyData;
};

