import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import '../App.css';

function TrackingPage() {
    const estimatedTime = 5;
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const getStepByElapsedTime = () => {
        const totalSteps = 4;
        const stepDuration = estimatedTime / totalSteps;
        const currentStep = Math.floor(elapsedTime / stepDuration) + 1;
        return currentStep > totalSteps ? totalSteps : currentStep;
    };

    const handleOrderArrived = () => {
        // Handle logic for when the user clicks "Order Arrived" button
        // You can update the order status or perform any other action
        alert('Order has arrived!'); // For demonstration purposes, you can replace this with your logic
    };

    return (
        <div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="track-order-container">
                <div className="steps-container">
                    {["Ordered", "Preparing", "In Transit", "Arrived"].map((step, index) => (
                        <div
                            key={index}
                            className={`step ${getStepByElapsedTime() === index + 1 ? 'active' : ''}`}
                        >
                            {step}
                        </div>
                    ))}
                </div>
                <div className="estimate-bar">
                    <div className="estimate-progress" style={{ width: `${(elapsedTime / estimatedTime) * 100}%` }}></div>
                </div>
                <div className="estimated-time">Estimated Time: {estimatedTime - elapsedTime} minutes</div>
                {/* Add other tracking page content here */}

                {/* "Order Arrived" button */}
                <button className="order-arrived-button" onClick={handleOrderArrived}>
                    Order Arrived
                </button>

                {/* Creative form for order status */}
                <div className="order-status-form">
                    <h2>Update Order Status</h2>
                    <form>
                        <label htmlFor="status1">How Do You Rate Venina Service:</label>
                        <input type="text" id="status1" placeholder="5(Excellent)/1(Awful)" />

                        <label htmlFor="status2">What Makes You Feel This Way:</label>
                        <input type="text" id="status2" placeholder="Good Food, Clean Driver, Bad Food etc" />

                        <label htmlFor="status3">Are You Likely To Recommend Venina:</label>
                        <input type="text" id="status3" placeholder="5(Always)/1(Never)" />

                        <button type="submit">Update Status</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrackingPage;
