import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    // const classes = useStyles();
    const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    return (
        <>
            <h1>Checkout Page</h1>
        </>
    )
}
