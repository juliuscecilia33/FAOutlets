import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { ReviewContainer } from './review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
