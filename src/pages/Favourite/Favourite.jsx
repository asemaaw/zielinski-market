import React, {useContext} from 'react';
import './fav.scss'
import DataProvider, { CustomContext } from '../../DataProvider';
import Footer from '../../components/Footer/Footer';

const Favourite = () => {
const {fav} = useContext(DataProvider)

    return (
        <>
        <section className='favourite'>
            {fav.map((el) => (
                <div className='fav-wrapper'>
                <div className='favor'> 
                    <img src={el.image} alt="" />
                    <div className='te'>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    <button>В избранном</button>
                    </div>
                    

                


                </div>
                </div>
                

            ))}


            
        </section>
        <Footer/>
        </>
    );
};

export default Favourite;