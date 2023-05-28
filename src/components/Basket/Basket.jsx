import React, { useContext, useEffect, useState } from 'react';
import './basket.scss'
import { Link, useParams } from "react-router-dom"
import DataProvider, { CustomContext } from '../../DataProvider';
import axios from 'axios';
import Footer from '../Footer/Footer';
// import { CartContext } from '../../CartContext';

const Basket = () => {
   
//     const { cartItems, removeFromCart } = useContext(CartContext);

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };
const {basket} = useContext(DataProvider)
console.log(basket);



    
    return (
      <>
        <section className='basket'>
            

            {basket.map((el)=>(
                
                <div className='bask-card'>
                    
                    
                    <img src={el.image} alt="" />
                    <div className='te'>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    </div>
                    

                


                </div>
                
                
                
            ))}
            {/* <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
             */}
        </section>
        <Footer/>
        </>
    );
};

export default Basket;