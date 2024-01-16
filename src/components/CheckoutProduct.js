import React from 'react';
import '../css/CheckoutProduct.css'
import { useStateValue } from '../context/StateProvider';

const MyWrappedComponent = (props) => {

    const { id, imgURL, title, rating, price } = props.item;
    const { hideButton } = props;

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={imgURL} alt="" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map(() => {
                        return <p>⭐</p>
                    })}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
}

class CheckoutProduct extends React.Component {
    render() {
        return (
            <MyWrappedComponent {...this.props} />
        );
    }
}

export default CheckoutProduct;
