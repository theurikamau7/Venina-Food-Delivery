import React, { useEffect, useState } from 'react';
import './Homepage.css'; 
import NavBar from './navbar';  

function TrackingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const estimatedTime = 60; 
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 60000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="navbar">
                <NavBar /> 
            </div>
            <div className="track-order-container">
                <div className="steps-container">
                    <div className={`step ${currentStep === 1 ? 'active' : ''}`}>Order Placed</div>
                    <div className={`step ${currentStep === 2 ? 'active' : ''}`}>Preparing</div>
                    <div className={`step ${currentStep === 3 ? 'active' : ''}`}>Connecting</div>
                    <div className={`step ${currentStep === 4 ? 'active' : ''}`}>Arrived</div>
                </div>
                <div className="estimate-bar">
                    <div className="estimate-progress" style={{ width: `${(elapsedTime / estimatedTime) * 100}%` }}></div>
                </div>
                <div className="estimated-time">Estimated Time: {estimatedTime - elapsedTime} minutes</div>
                {/* Add other tracking page content here */}
            </div>
        </div>
    );
}

export default TrackingPage;