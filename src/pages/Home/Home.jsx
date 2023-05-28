import React from 'react';
import './home.scss'
import man from './man.jpg'
import parfume from './parfume.jpg'
import cream from './cream.jpg'
import home from './home.jpg'
import hands from './hands.jpg'
import face from './face.jpg'
import hair from './hair.jpg'
import mini from './mini.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import fake from './fake.png'
import candle from './candle.jpg'
import right from './right.webp'
import { Link } from 'react-router-dom'
import 'swiper/css';
import {animateScroll} from 'react-scroll'
import homie from './homie.webp'
import homie2 from './homie2.webp'
import homie3 from './homie3.webp'
import Footer from '../../components/Footer/Footer';






const Home = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        
        <section className='main'>
            <div className='main-wrapper'>
            <div className='left-wrapper'>
            <div className='first'>
                <div className='first-img'>
                    <img src={man} alt="" />
                </div>
                <div className='first-descr'>
                    <Link onClick={toTop} to='/new'>
                    <p>Новинки</p>
                    </Link>
                </div>

            </div>
            <div className='first'>
                <div className='first-descr'>
                    <Link onClick={toTop} to='/parfume'>
                    <p>Парфюм</p>
                    </Link>
                </div>
                <div className='first-img'>
                    <img src={parfume} alt="" className='this'/>
                </div>
            </div>
            <div className='first'>
                <div className='first-img'>
                    <img src={cream} alt="" />
                </div>
                <div className='first-descr'>
                    <Link  onClick={toTop} to='body'>
                    <p>Для тела</p>
                    </Link>
                </div>
                </div>
                
                <div className='first'> 
                <div className='first-descr home'>
                    <Link onClick={toTop} to='/house'>
                    <p>Для дома</p>
                    </Link>
                </div>
                <div className='first-img'>
                    <img src={home} alt="" className='this' />
                </div>
                
                </div>
                <div className='first'>
                    <div className='first-img'>
                        <img src={hands} alt="" />
                    </div>
                    <div className='first-descr'>
                        <Link onClick={toTop} to='/hand'>
                        <p>Для рук</p>
                        </Link>
                    </div>
                </div>
                <div className='first'>
                    <div className='first-descr face'>
                        <Link onClick={toTop} to='/face'>
                        <p>Для лица</p>
                        </Link>
                    </div>
                    <div className='first-img'>
                        <img src={face} alt="" className='this' />
                    </div>
                </div>
                <div className='first'>
                    <div className='first-img'>
                     <img src={hair} alt="" />
                     </div>
               
                <div className='first-descr'>
                    <p>Для волос</p>
                </div>
                </div>
                <div className='first'>
                    <div className='first-descr'>
                        <Link onClick={toTop} to='/set'>
                        <p>Наборы и миниатюры</p>
                        </Link>
                    </div>
                    <div className='first-img'>
                        <img src={mini} alt="" className='this minu' />
                    </div>
                </div>
                <div className='swiper-home'>
                    

                <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                
                navigation={true} 
                modules={[Navigation, Autoplay, Pagination, Keyboard]} 
                autoplay={true}
                className="mySwiper">
        <SwiperSlide>
            <div className='first-swiper'>
                <img src={fake} alt="" />
                <h2>Внимание!</h2>
                <p>На рынке выявлены продажи контрафактной продукции под нашим брендом, в том числе духи 100 мл в разных ароматах. Остерегайтесь подделок! Духи 100 мл выпускались только в аромате Black pepper, Ambra, Neroli (limited edition). Оригинальную продукцию можно приобрести в авторизованных Zielinski & Rozen точках продаж. Все духи Zielinski & Rozen промаркированы, убедиться в оригинальности духов можно через приложение "Честный знак", просканировав маркировку на упаковке.
</p>
<button>ПОДРОБНЕЕ</button>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='first-swiper'>
                <img src={candle} alt="" />
                <h2>Набор свечей Candle</h2>
                <p>Созданный парфюмером набор Zieliski & Rozen Candles - универсальный инструмент для перезагрузки и восполнения энергии.А еще - отличный способ наполнить дом ароматом,уютом,теплом светом и музыкой.</p>
                <button>ПОДРОБНЕЕ</button>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
      </div>
      
      </div>
      <div className='right-wrapper'>
        
        <img src={right} alt="" />
        <h2>Новый аромат Pink Pepper, Elemi, Cinnamon, Leather повествование о путешествии по Европе</h2>
        <p>Небольшое путешествие по Европе вдохновило Эреза на создание нового аромата Pink Pepper, Elemi, Cinnamon, Leather.</p>
        <button>
            <Link onClick={toTop} to='/homeone'>
            ПОДРОБНЕЕ
            </Link>
            </button>
            <div className='homie'>
                <img src={homie} alt="" />
                <h2>Public Art by Misha for Zielinski & Rozen</h2>
                <p>Дух свободы. Самовыражение. Творчество. Уличная культура Израиля стала одной из его визитных карточек. Муралы и граффити буквально встречаются на каждом шагу, постоянно сменяя и дополняя друг друга. За каждой работой стоит неповторимая и уникальная история автора.</p>
                
            </div>
            <div className='homie3'>
                <img src={homie2} alt="" />
                <h2>Neshama</h2>
                <p>Иногда самое важное кроется где-то между слов, но безошибочно считывается нами на уровне подсознания. Едва уловимый звук, жест, взгляд, запах моментально пробуждают в нас самые чистые эмоции и выводят на самый искренний диалог с собой.

Neshama (נשמה/ soul) — философия бренда, переведенная на язык музыки и тонко зашифрованная между строк. С каждым вдохом чувствовать себя собой. С каждым звуком. Каждый день.</p>
                
            </div>
            
            <div className='homie3'>
                <img src={homie3} alt="" />
                <h2>Добавить в корзину: кепка by Zielinski & Rozen</h2>
                <p>Классный образ состоит из деталей, в этом убеждены Эрез и Лея Розен. Они отдают предпочтение большому количеству аксессуаров — браслеты, кольца, очки, шарфы, головные уборы. Находят самые необычные, сочетают несочетаемое и не боятся экспериментировать. Именно поэтому Лея Розен придумала и разработала дизайн фирменных кепок Zielinski & Rozen, абсолютный must-have гардероба каждого жителя Тель-Авива.</p>
                
            </div>
           
            
      </div>
                


            
                </div>
                <Footer/>
            
        </section>
       
        
    );
};

export default Home;