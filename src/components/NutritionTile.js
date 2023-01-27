import React from 'react';
import { ReactComponent as CaloriesIcon } from '../assets/icons/dashboard/calories.svg';
import { ReactComponent as ProteinsIcon } from '../assets/icons/dashboard/proteins.svg';
import { ReactComponent as CarbohydratesIcon } from '../assets/icons/dashboard/carbohydrates.svg';
import { ReactComponent as FatsIcon } from '../assets/icons/dashboard/fats.svg';

const NutritionTile = ({type, data}) => {
    const tileBackground = {
        calories: "calories",
        proteins: "proteins",
        carbohydrates: "carbohydrates",
        fats: "fats",
    };

    const tileImg = (type) => {
        switch (type) {
            case "calories":
                return <CaloriesIcon />;
            case "proteins":
                return <ProteinsIcon />;
            case "carbohydrates":
                return <CarbohydratesIcon />;
            case "fats":
                return <FatsIcon />;
            default:
                return;
        };
    };

    const tileValue = {
        calories: data.calorieCount,
        proteins: data.proteinCount,
        carbohydrates: data.carbohydrateCount,
        fats: data.lipidCount,
    };

    const tileText = (type) => {
        switch (type) {
            case 'calories':
                return "Calories";
            case 'proteins':
                return "Protéines";
            case 'carbohydrates':
                return "Lipides";
            case 'fats':
                return "Glucides";
            default:
                return;
        };
    };

    return (
        <div className="nutrition-container__tile">
            <div className={"nutrition-container__tile__icon " + tileBackground[type] + "Icon"}>
                {tileImg(type)}
            </div>
            
            <div className="nutrition-container__tile__text">
                <p className="nutrition-container__tile__text-value">
                    {tileValue[type]}
                    {type === 'calories' ? 'kCal' : 'g'}
                </p>
                <p className="nutrition-container__tile__text-type">{tileText(type)}</p>
            </div>
        </div>
    );
};

export default NutritionTile;

