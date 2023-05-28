import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
import mainlogo from './main_logo.svg'
import fav from './heart (1).png'
import basket from './shopping-bag.png'
import search from './search.png'
import auth from './user.png'
import {animateScroll} from 'react-scroll'

const Header = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <header className='header'>
            <nav>
            <Link onClick={toTop} to='catalog' className='link-text'>Каталог</Link>
            <Link onClick={toTop} to='' >
            <div className='mainlogo'>
                <img src={mainlogo} alt="" />

            </div>
            </Link>
            <Link onClick={toTop} to='/favourite' > <img src={fav} alt="" className='link'/></Link>
            <div className='line'></div>
            <Link onClick={toTop} to='/basket' > <img src={basket} alt="" className='link'/></Link>
            <div className='line'></div>
            <Link onClick={toTop} to='search' > <img src={search} alt="" className='link'/></Link>
            <div className='line'></div>
            <Link onClick={toTop} to='/register'> <img src={auth} alt="" className='link'/></Link>
            </nav>
            
        </header>
    );
};

export default Header;