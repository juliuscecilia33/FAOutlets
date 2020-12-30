import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../lib/commerce';
import { AddressFormContainer, PaymentFormContainer } from '../containers';
import useStyles from '../components/checkout/styles';

const steps = ['Shipping address', 'Payment details'];

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
    }, [cart]);

    const test = (data) => {
        setShippingData(data);

        nextStep();
    };

    let Confirmation = () => (order.customer ? (
        <>
            <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    if (error) {
        Confirmation = () => (
            <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }

    const Form = () => (activeStep === 0
        ? <AddressFormContainer checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
        : <PaymentFormContainer checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

    return (
        <>
            <h1>Checkout Page</h1>
        </>
    )
}
