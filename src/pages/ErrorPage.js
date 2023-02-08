import React from 'react';

const ErrorPage = (error) => {
    const errorType = (type) => {
        console.log(type.data);

        switch (type.data) {
            case undefined:
                return "Page introuvable";
            case "Utilisateur inconnu":
                return "Utilisateur inconnu";
            default:
                return "Page introuvable";
        };
    };

    return (
        <div className="error">
            <h1>404</h1>
            <p>Erreur :</p>
            <p>{errorType(error)}</p>
        </div>
    );
};

export default ErrorPage;

