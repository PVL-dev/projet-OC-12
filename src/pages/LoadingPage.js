import React from 'react';

/**
 * Generate LoadingPage in DOM
 *
 * Simple loading page with animated loader.
 *
 * @component Loading page 
 */
const LoadingPage = () => {
    return (
        <div className="loading">
            <div className="loading-loader">
                <svg width="16px" height="12px">
                    <polyline className="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline className="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>
            </div>

            <div className="loading-text">
                <p>Chargement en cours</p>
            </div>
        </div>
    );
};

export default LoadingPage;

