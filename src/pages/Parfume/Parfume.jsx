import React from 'react';
import './parfume.scss'
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Card from '../../components/Card/Card/Card';
import Footer from '../../components/Footer/Footer';

const Parfume = () => {
    const {products} = useContext(CustomContext)
    return (
        <>
        <section className='par'>
            {
    products.filter((el)=>(
        el.category ==='parfume'
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

export default Parfume;