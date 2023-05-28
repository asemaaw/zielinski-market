import React from 'react';
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card/Card';
import './set.scss'

const Set = () => {
    const {products} = useContext(DataProvider)
    return (
        <>
        <section className='set-wrapper'>
            {
    products.filter((el)=>(
        el.category ==='set'
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

export default Set;