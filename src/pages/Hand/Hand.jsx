import React from 'react';
import './hand.scss'
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Card from '../../components/Card/Card/Card';
import Footer from '../../components/Footer/Footer';

const Hand = () => {
    const {products} = useContext(CustomContext)
    return (
        <>
        <section className='hand-wrapper'>
        
        {
        products.filter((el)=>(
            el.category ==='hands'
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

export default Hand;