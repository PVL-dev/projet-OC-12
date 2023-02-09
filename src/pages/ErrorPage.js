import React from 'react';

/**
 * Generate ErrorPage in DOM
 *
 * The text that describes the error changes depending on the "error" string.
 *
 * @param {string} error String with the type of error determined earlier.
 * @component Error page 
 */
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

