import React from 'react';
import './homeone.scss'
import vk from './vkontakte.png'
import tg from './telegram.png'
import ws from './whatsapp (1).png'
import pin from './pinterest.png'
import homeo from './ze.webp'
import zell from './zell.jpg'
import zell2 from './zell2.jpg'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const HomeOne = () => {
    return (
        <>
        <section className='home-one'>
            <div className='home-one-wrapper'>
                <div className='homeo-left'>
                    <h2>Новый аромат Pink Pepper, Elemi, Cinnamon, Leather повествование о путешествии по Европе</h2>
                    <p>Небольшое путешествие по Европе вдохновило Эреза на создание нового аромата Pink Pepper, Elemi, Cinnamon, Leather. Каждый город — как книга со своим неповторимым сюжетом и героями. Улицы и площади, архитектура, ритм города, люди, бегущие по своим делам или живо общающиеся в ресторанах и кафе, — все это передает уникальность и атмосферу города.

«Я больше 10 лет назад вернулся из Европы в Тель-Авив. Однако открытие шоурумов в Париже, Мадриде, Амстердаме воскресили в памяти разные воспоминания. В том числе — о моем любимом ингредиенте элеми, который я давно не использовал при создании ароматов,» – говорит Эрез.

Нота элеми — динамичная, необъяснимо-притягательная; она меняется в зависимости от сочетания и раскрывается абсолютно по-разному. Эрез дополнил ее розовым перцем — позитивным и ярким, как люди, которых парфюмер встречал в Париже. Корица у него ассоциируется с Мадридом и Ибицей, где Эрез посетил много уютных наполненных музыкой ресторанов. Для того, чтобы придать композиции динамику и внутреннюю свободу, присущие Амстердаму, он добавил ноту кожи. При этом ни одна нота не перебивает другую, давая доминирующему аккорду элеми раскрыться в полной мере.

Несмотря на баланс в звучании аромата, по словам Эреза, Pink Pepper, Elemi, Cinnamon, Leather — произведение с продолжением. Книга, у которой есть несколько томов. А также множество читателей, которые по-разному воспримут ее сюжет.</p>
<Link to='/catalog'>
<button>Перейти в магазин</button>
</Link>
<p className='send'>Поделитесь с друзьями</p>
<div className='home-one-icons'>
    <img src={vk} alt="" />
    <img src={tg} alt="" />
    <img src={ws} alt="" />
    <img src={pin} alt="" />
</div>
                </div>
                <div className='homeo-line'>
                   
                </div>
                <div className='homeo-right'>
                    <img src={homeo} alt="" />
                </div>
            </div>
            <div className='low-line'>

            </div>
            <div className='low-container'>
                <img src={zell} alt="" />
                <img src={zell2} alt="" />
            </div>
            


            
        </section>
        <Footer/>
        </>
    );
};

export default HomeOne;