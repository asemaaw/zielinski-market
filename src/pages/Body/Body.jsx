import React from 'react';
import './body.scss'
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Card from '../../components/Card/Card/Card';
import Footer from '../../components/Footer/Footer';

const Body = () => {
    const { products } = useContext(CustomContext)
    return (
        <>
        <section className='body-wrapper'>

            {
                products.filter((el) => (
                    el.category === 'body'
                )).map((el) => (
                    <div className='cards'>

                        <Card products={el} />
                    </div>




                ))
            }
        </section>
        <Footer/>
        </>

    );
};

export default Body;