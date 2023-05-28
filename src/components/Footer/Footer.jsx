import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom';
import {animateScroll} from 'react-scroll'


const Footer = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='shop-title'>
                    <h2>Магазин</h2>
                    <Link onClick={toTop} to='/catalog'>
                    <p>Вся продукция</p>
                    </Link>
                    <Link onClick={toTop} to='/new'>
                    <p>Новинки</p>
                    </Link>
                    <Link  onClick={toTop}to='/parfume'>
                    <p>Парфюм</p>
                    </Link>
                    <Link  onClick={toTop} to='/body'>
                    <p>Для тела</p>
                    </Link>
                    <Link onClick={toTop} to='/house'>
                    <p>Для дома</p>
                    </Link>
                    <Link onClick={toTop} to='/hand'>
                    <p>Для рук</p>
                    </Link>
                    <Link onClick={toTop} to='/face'>
                    <p>Для лица</p>
                    </Link>
                    <Link onClick={toTop} to='/set'>
                    <p>Наборы и миниатюры</p>
                    </Link>

                </div>
                <div className='footer-line'></div>
                <div className='shop-title'>
                    <h2>О нас</h2>
                    <p>Vibes</p>
                
                    <p>Наши друзья</p>
                    <Link onClick={toTop} to='/questions'>
                    <p>Часто задаваемые вопросы</p>
                    </Link>
                </div>
                <div className='footer-line'></div>
                <div className='last-footer'>
                    <div className='up-wrapper'>
                        <Link onClick={toTop} to='/basket'>
                        <p className='baket'>Корзина</p>
                        </Link>
                        <Link onClick={toTop} to='/favourite'>
                        <p>Избранное</p>
                        </Link>
                    </div>
                    <div className='low-wrapper'>
                        <p>Zielinski & Rozen © 2018-2023</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;