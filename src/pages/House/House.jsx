import React from 'react';
import './house.scss'
import { useContext } from 'react';
import DataProvider, { CustomContext } from '../../DataProvider';
import Card from '../../components/Card/Card/Card';
import Footer from '../../components/Footer/Footer';

const House = () => {
    const { products } = useContext(CustomContext)
    return (
        <>
        <section className='house-wrapper'>

            {
                products.filter((el) => (
                    el.category === 'house'
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

export default House;