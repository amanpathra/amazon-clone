import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../css/Subtotal.css'
import { useStateValue } from '../context/StateProvider';
import { useNavigate } from 'react-router-dom';
import getBasketTotal from '../getBasketTotal'

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    const navigate = useNavigate();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):&nbsp;
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => navigate('/payment')}>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
