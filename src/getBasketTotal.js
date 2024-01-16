const getBasketTotal = (basket) => {
    return Math.round(basket?.reduce((r, cur) => r + cur.price, 0) * 100) / 100;
}

export default getBasketTotal;