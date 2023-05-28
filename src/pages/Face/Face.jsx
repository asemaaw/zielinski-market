import React from 'react';
import './face.scss'
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Card from '../../components/Card/Card/Card';
import Footer from '../../components/Footer/Footer';

const Face = () => {
    const {products} = useContext(CustomContext)
    return (
        <>
        <section className='face-wrapper'>
        
        {
        products.filter((el)=>(
            el.category ==='face'
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

export default Face;