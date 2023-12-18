
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';

function PaymentPage() {
    
    const [totalAmount, setTotalAmount] = useState(100);

    
    const [selectedMethod, setSelectedMethod] = useState('');

   
    const handlePayment = () => {
        if (selectedMethod === 'mpesa') {
            // Implement logic to initiate M-Pesa payment
            console.log('Initiating M-Pesa payment...');
        } else if (selectedMethod === 'cash') {
            // Implement logic to initiate cash payment
            console.log('Initiating cash payment...');
        }
    };

    useEffect(() => {
        const fetchTotalAmount = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setTotalAmount(200); 
        };

        fetchTotalAmount();
    }, []); 

    return (
        <div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="payment-container">
                <h2>Total Amount to Pay: ${totalAmount}</h2>
                <div className="payment-options">
                    <label>
                        <input
                            type="radio"
                            value="mpesa"
                            checked={selectedMethod === 'mpesa'}
                            onChange={() => setSelectedMethod('mpesa')}
                        />
                        M-Pesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="cash"
                            checked={selectedMethod === 'cash'}
                            onChange={() => setSelectedMethod('cash')}
                        />
                        Cash on Delivery
                    </label>
                </div>
                <button onClick={handlePayment}>Pay</button>
            </div>
        </div>
    );
}

export default PaymentPage;
