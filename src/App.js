import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { useStateValue } from './context/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51N4klNSJJkULapk4bng9K6XjV129YDZH0GjKqy3DFWmwJwACK22aePwa2Ej78IZntUYyOKr6qD9paSkR6uDrOTUB00nXnEWX9n');


function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(()=>{
        // will only run once when the app component runs
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>> ', authUser);

            if(authUser){
                // The user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                // The user is logge out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<> <Header/> <Home/> </>} />
                    <Route exact path='/checkout' element={<> <Header /> <Checkout /> </>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/orders' element={<> <Header/> <Orders/> </>} />
                    <Route exact path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;