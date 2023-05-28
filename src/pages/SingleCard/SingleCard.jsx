import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import DataProvider, { CustomContext } from '../../DataProvider';
// import { CartContext } from '../../CartContext';
import {animateScroll} from 'react-scroll'
import Footer from '../../components/Footer/Footer';


import './singlecard.scss'
import axios from 'axios';
// import cartContext from '../../context/cartContext';


const SingleCard = ({product}) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // const { addToCart } = useContext(CartContext);
  const {addToBasket} = useContext(DataProvider)

  const {addToFav} = useContext(DataProvider)

  // const handleAddToCart = () => {
  //   addToCart(product);
  // };
  // const { addToCart } = useContext(CartContext);

  // const handleAddToCart = () => {
  //   addToCart(product);
  // };

  

  const { id } = useParams()

  console.log(id);

  const [data, setData] = useState([])
  // const [basket, setBasket] = useState([])

  // const [basket, setBasket] = useState([])

  // console.log(data)

  useEffect(() => {
    axios.get(`http://localhost:3004/products/${id}`)
      .then(res => setData(res.data))
  }, [])

  // useEffect(() => {
  //   axios.get(`http://localhost:3004/products/${id}`)
  //     .then(res => setBasket(res.data))
  // }, [])
  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
  


  // const productId = Math().params.id; 

  return (
    <>
    <section className="single-card">
      <div className='single-wrapper'>
    
      <img src={`/${data.image}`} alt="" />

      
<div className='single-right'>
<p>{data.title}</p>
<p>{data.price}</p>
<div className='count'>
<p className='hw'>Количество:</p>

        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
        </div>
      
<Link onClick={toTop} to='/basket'>
<button className='bas' onClick={()=>addToBasket(data)}>В корзину</button>
</Link>
<p className='hw'>Сохраните этот товар в закладках</p>
<Link onClick={toTop} to='/favourite'>

      <button onClick={() =>addToFav(data)}>  В избранное</button>
      </Link>
      </div>
      
      </div>

    </section>
    <Footer/>
    </>

  );
};

export default SingleCard;