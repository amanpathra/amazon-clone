import React from 'react';
import '../css/Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product id={1} title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' imgURL='https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' price={18.79} rating={5}/>

                <Product id={2} title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over' imgURL='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SY450_.jpg' price={23.99} rating={4}/>
            </div>

            <div className="home__row">
                <Product id={3} title='Dowinx Gaming Chair Fabric with Pocket Spring Cushion, Massage Game Chair Cloth with Headrest, Grey' imgURL='https://m.media-amazon.com/images/I/612rCYuFeEL._AC_SY550_.jpg' price={189.99}rating={4} />
                
                <Product id={4} title='Ninja AF161 Max XL Air Fryer that Cooks, Crisps, Roasts, Bakes, Reheats and Dehydrates, with 5.5 Quart Capacity' imgURL='https://m.media-amazon.com/images/I/71Sn7tr3GbL._AC_SX425_.jpg' price={99.95} rating={5} />

                <Product id={5} title='essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free' imgURL='https://m.media-amazon.com/images/I/61K6cQhw4EL._SY355_.jpg' price={4.99} rating={4} />
            </div>

            <div className="home__row">
                <Product id={6} title='OnePlus 9 Astral Black, 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 120Hz Fluid Display' imgURL='https://m.media-amazon.com/images/I/81ZEdtYBYfL._AC_SY355_.jpg' price={389.99} rating={4} />
                
                <Product id={7} title='Trendy Queen Two Piece Outfits Women Summer Shorts Sets 2 Piece Sleeveless Matching Lounge Crop Top and High Waisted Shorts' imgURL='https://m.media-amazon.com/images/I/71AUhL7Z6LL._AC_UY445_.jpg' price={30.99} rating={4} />
            </div>
        </div>
    )
}

export default Home
