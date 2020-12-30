import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../lib/commerce';
import { AddressFormContainer, PaymentFormContainer, HeaderContainer } from '../containers';
import useStyles from '../components/checkout/styles';

const steps = ['Shipping address', 'Payment details'];

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [ isFinished, setIsFinished ] = useState(false);
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

    const next = (data) => {
        setShippingData(data);

        nextStep();
    };

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} </Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference} </Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
        ) : isFinished ? (
            <>
                <div>
                    <Typography variant="h5">Thank you for your purchase</Typography>
                    <Divider className={classes.divider} />
                </div>
                <br />
                <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
            </>
        ) : (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
    );

    const Form = () => (activeStep === 0
        ? <AddressFormContainer checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next} />
        : <PaymentFormContainer checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />);

        return (
            <>
                <CssBaseline />
                {/* <HeaderContainer /> */}
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                    </Paper>
                </main>
            </>
        )
}
