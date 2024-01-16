import React from 'react';
import '../css/Product.css'
import {useStateValue} from '../context/StateProvider'

const Product = ({id, title, imgURL, price, rating}) => {

    const [{state}, dispatch] = useStateValue();


    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { id, title, imgURL, rating, price }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((e, i)=>{
                        return <p>⭐</p>
                    })}
                </div>
            </div>

            <img src={imgURL} alt="" />

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
