import React from 'react';
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';

import Card from '../../components/Card/Card/Card';
import './new.scss'
import Footer from '../../components/Footer/Footer';

const New = () => {

const {products} = useContext(DataProvider)

    // const handleChangeCategory = (newCategory) => {
    //   setCategory(newCategory) 
    // }
    return (
        <>
        
        <section className='new-wrapper'>
            
            {/* <div onClick={() => handleChangeCategory("new1")}></div> */}
            
{
    products.filter((el)=>(
        el.category ==='new1'
        // el.status === 'NEW'
    )).map((el)=>(
        <div className='cards'>
            
          
            <Card products={el}/>
            </div>
       
            
        
      
    ))
}
</section>
<Footer/>
</>
            
        
    );
};

export default New;

// import React from 'react';
// import './new.scss'
// import Card from '../../components/Card/Card';
// // import { useSelector, useDispatch } from 'react-redux'
// // import {useNavigate} from 'react-router-dom';
// // import {useSelector} from 'react-redux'


// import axios from 'axios';
// import { useState, useEffect } from 'react'


// const New = () => {
//     const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   axios('http://localhost:3004/products')
    //   .then(({data})=>setProducts(data))
    // }, []);
//     const [all,setAll] = useState(false)
//     console.log(products);
//     // const {data,filter} = useSelector((state)=>state.products)


//     // const {data,filter} = useSelector((state)=>state.products)
//     // const dispatch = useDispatch()
//     // const navigate =useNavigate()

//     // useEffect(()=>{
//     //     axios("http://localhost:8080/product")
//     //         .then(({data})=>dispatch(setAllProducts(data)))
//     // },[])

//     return (
//         <section className='new-catalog'>
//             <h2>Новинки</h2>
//             <p>Каталог / Новинки</p>
//             {/* {
//                         all?   data.filter((el)=>el.status==='new')
//                             .map((el)=>(
//                                 <Card el={el}/>
//                             ))
//                             :
//                             data.filter((el)=>el.status==='new')
//                                 .slice(0,4)
//                                 .map((el)=>(
//                                     <Card el={el}/>
//                                 ))
//                     } */}
//             {/* {products.map(product => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <p>{product.price}</p>
//         </div> */}
//       {/* ))} */}


            
//         </section>
//     );
// };

// export default New;