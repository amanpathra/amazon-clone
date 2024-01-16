import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider';
import { db } from '../firebase/firebase';
import '../css/Orders.css'
import Order from './Order';

const Orders = () => {

    const [{basket, user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .orderBy('created', 'desc')
              .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
              })
        }else{
            setOrders([]);
        }
          
    }, [])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders;