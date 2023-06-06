import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';

const Paypal = () => {
    return (
        <div>
            <PayPalScriptProvider>
                <PayPalButtons />
            </PayPalScriptProvider>
        </div>
    );
};

export default Paypal;