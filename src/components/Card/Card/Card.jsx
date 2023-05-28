import React, { useContext } from 'react';

import './card.scss'
import { Link } from 'react-router-dom';
import {animateScroll} from 'react-scroll'

const Card = ({products}) => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };

   



    return (
        
        <div key={products.id} className='card'>
            <p className='status' style={products.status !==''? {height: '30px'
}:{height:' '}}>{products.status}</p>
            <img src={products.image} alt="" />
            <div className='card-des'>
            <p>{products.title}</p>
            
            <p className='pr'>{products.price}</p>
            
                <Link onClick={toTop} to={`/singlecard/${products.id}`}>
                <button>Купить</button>
                </Link>
                </div>
                
        </div>
        
    );
};

export default Card;



// import React from 'react';
// import './card.scss'
// import { Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from "react-redux";

// const Card = ( ) => {
//     // const dispatch = useDispatch()

//     // const { data } = useSelector((state) => state.products)
//     return (
//         <div key={el.id} className='card'>
//             <img src={el.image} alt="" />
            
//                 <h2 className='card-title'>{el.title}</h2>
//                 <p className='card-price'>{el.price}</p>
//                 {/* <button className={`${data.findIndex((item) => item.id === el.id) > -1 ? 'btnadded' : 'btnadd'}`} onClick={() => dispatch(setProduct(el))}>В корзину</button> */}
            
            
//         </div>
//     );
// };

// export default Card;