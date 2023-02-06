export default class DatasFormater {
    activitiesDatas(data) {
        return data.sessions.map((elmt, i) => ({
            day: i + 1,
            kilos: elmt.kilogram,
            calories: elmt.calories,
        }));
    };


    sessionsDatas(data) {
        const abbreviatedDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

        return data.sessions.map((elmt, i) => ({
            abbreviatedDay: abbreviatedDays[i],
            duration: elmt.sessionLength
        }));
    };


    performanceDatas(data) {
        const labels = [
            {intensity: "Intensité", order: 1},
            {speed: "Vitesse", order: 2},
            {strength: "Force", order: 3},
            {endurance: "Endurance", order: 4},
            {energy: "Énergie", order: 5},
            {cardio: "Cardio", order: 6}
        ];

        const datasArray = data.data.map((mapElmt, i) => {
            const kind = [data.kind[mapElmt.kind]][0];
            const value = mapElmt.value;

            let category = null;
            let sortingOrder = null;
            labels.forEach(forElmt => {
                const key = Object.keys(forElmt)[0];
                if (key === kind) {
                    category = forElmt[key];
                    sortingOrder = forElmt.order;
                } else {
                    return null;
                };
            });
            
            return ({
                category: category,
                kind: kind,
                value: value,
                order: sortingOrder
            })
        });
        
        return datasArray.sort(
            function(a, b) {
                return a.order - b.order;
            }
        );
    };
    

    scoreDatas(data) {
        return [
            {
                score: data * 100, 
                fillValue: 100
            }
        ];
    };
};

