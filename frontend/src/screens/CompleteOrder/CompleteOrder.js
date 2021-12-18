import React from 'react';
import { Link } from 'react-router-dom';

const CompleteOrder = () => {
    return (
        <div style={{height: "355px"}}>
            <h5>Your order has been Successfully</h5>
            <Link to="/"><button>Go Back to Home</button></Link>
        </div>
    );
};

export default CompleteOrder;