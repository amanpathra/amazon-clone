import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context/StateProvider';
import '../css/Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import getBasketTotal from '../getBasketTotal';
import axios from '../axios/axios';
import { db } from '../firebase/firebase';

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(()=>{
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // note - Stripe expects the total in a currencies subunits (so multiply by 100)
                url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}`
            });
            setClientSecret(response.data.clientSecret)
            console.log('client secret is >>> ', clientSecret);
        }
        getClientSecret();

    }, [basket])

    const handleSubmit = async (event) => {
        // all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent means payment confirmation

            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true })
        })
    }

    const handleChange = event => {
        // Listen for chnages in card element
        // And display any errors as the customer types their card number
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>

            <div className="payment__container">
                <h1>Checkout(<Link to='/checkout'>{basket.length} items</Link>)</h1>

                {/* Payment Section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment Section - review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct item={item} key={item.id} hideButton />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? 'Processing' : 'Buy Now'}</span>
                                </button>

                                {/* Errors */}
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;