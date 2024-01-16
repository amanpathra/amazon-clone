import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context/StateProvider';
import FlipMove from 'react-flip-move';


const Checkout = () => {

    const [{ basket, user }] = useStateValue();

    const ticketNotVisibleState = {
        transform: "translateX(100%)",
        opacity: 0
    };

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    <FlipMove enterAnimation={{
                        from: ticketNotVisibleState,
                        to: {}
                        }} leaveAnimation={{
                            from: {},
                            to: ticketNotVisibleState
                        }}>
                        {basket.map(item => (
                            <CheckoutProduct item={item} key={item.id}/>
                        ))}
                    </FlipMove>
                </div>
            </div>

            <div className="checkout__right">
                {/* <h2>Sub Total will go here</h2> */}
                <Subtotal />
            </div>


        </div>
    )
}

export default Checkout;