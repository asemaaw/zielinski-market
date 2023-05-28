import React from 'react';
import './catalog.scss'
import man from '../Home/man.jpg'
import parfume from '../Home/parfume.jpg'
import cream from '../Home/cream.jpg'
import home from '../Home/home.jpg'
import hands from '../Home/hands.jpg'
import face from '../Home/face.jpg'
import hair from '../Home/hair.jpg'
import mini from '../Home/mini.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import {animateScroll} from 'react-scroll'

const Catalog = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <>
        <section className='catalog'>
            <div className='catalog-wrapper'>
                
                <div className='up-catalog'>
                <div>
                    <img src={man} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/new'>
                    <h2>Новинки</h2>
                    </Link>
                </div>
                <div>
                    <img src={parfume} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/parfume'>
                    <h2>Парфюм</h2>
                    </Link>
                </div>
                <div>
                    <img src={cream} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/body'>
                    <h2>Для тела</h2>
                    </Link>
                </div>
                <div>
                    <img src={home} alt="" />
                    <div className='second-line'></div>
                    <Link  onClick={toTop} to='/house'>
                    <h2>Для дома</h2>
                    </Link>
                </div>

                </div>
                <div className='low-catalog'>
                <div>
                    <img src={hands} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/hand'>
                    <h2>Для рук</h2>
                    </Link>
                </div>
                <div>
                    <img src={face} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/face'>
                    <h2>Для лица</h2>
                    </Link>
                </div>
                
                <div>
                    <img src={mini} alt="" />
                    <div className='second-line'></div>
                    <Link onClick={toTop} to='/set'>
                    <h2>Наборы</h2>
                    </Link>
                </div>

                </div>
                <Link onClick={toTop} to='/addproduct'>
                <button className='add-p'>Добавьте свой продукт</button>
                </Link>
                
            </div>
            
        </section>
        <Footer/>
        </>
    );
};

export default Catalog;