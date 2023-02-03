import axios from "axios";
import mockedDatas from "./mockedDatas";

export const getUserData = async (userId) => {
    const url = "http://localhost:3005/user/";
    try {
		const user = await axios
			.get(url + userId)
			.then((res) => res.data.data);
		const activity = await axios
			.get(url + userId + "/activity")
			.then((res) => res.data.data);
		const averageSessions = await axios
			.get(url + userId + "/average-sessions")
			.then((res) => res.data.data);
		const performance = await axios
			.get(url + userId + "/performance")
			.then((res) => res.data.data);
		return { user, activity, averageSessions, performance };
    } catch (error) {
      	console.log("Impossible de charger les données du backend : ", error);
      	return Mocker(userId);
    };
};

const Mocker = (id) => {
    const userId = parseInt(id);
  
    const user = mockedDatas.USER_MAIN_DATA.filter(
      	(user) => user.id === userId
    ).shift();
    const activity = mockedDatas.USER_ACTIVITY.filter(
      	(userActivity) => userActivity.userId === userId
    ).shift();
    const averageSessions = mockedDatas.USER_AVERAGE_SESSIONS.filter(
      	(userActivity) => userActivity.userId === userId
    ).shift();
    const performance = mockedDatas.USER_PERFORMANCE.filter(
      	(userPerformance) => userPerformance.userId === userId
    ).shift();
	
    console.log("Utilisation des données mockées : ", user, activity, averageSessions, performance);
  
    return { user, activity, averageSessions, performance };
};

