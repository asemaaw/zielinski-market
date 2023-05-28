import React from 'react';
import './register.scss'
import us from './user.png'
import { useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';


const Register = () => {
    // const [info, setInfo] = useState({
    //     email: ''
    // });
    // const handleEmailChange = (event) => {
    //     setInfo(event.target.value);
    //   };
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:3004/users',info)

    //     const handleEmailChange = (event) => {
    //         setInfo({ ...info, email: event.target.value });
    //       };
    return (
        <>
        <section className='register'>
            <div className='register-wrapper'>
                <div className='reg-left'>
                    <h2>Личный кабинет</h2>
                    <p>Магазин / Личный кабинет</p>

                    <div className='guest'>
                        <img src={us} alt="" />
                        <p>Гостевой аккаунт</p>
                        
                    </div>
                    <p>Уже зарегистировались? Войти в аккаунт</p>
                </div>
                <div className='reg-right'>
                    <h3>Зарегистрируйтесь или войдите</h3>
                    <p>Вы сможете быстрее оформлять и отслеживать свои заказы, а списки избранных товаров будут синхронизироваться на всех устройствах, с которых вы заходите в магазин. Введите свой адрес электронной почты и мы отправим вам ссылку для мгновенного входа в аккаунт.</p>
                    <p>Мы автоматически создадим для вас аккаунт, если у вас его ещё нет.</p>
                    <input  type="email" placeholder='Ваш адрес электронной почты' required/>
                    <p>Продолжая, вы принимаете условия: Согласие на обработку персональных данных</p>
                    <button>Получить ссылку для входа</button>
                </div>
            </div>

            
        </section>
        <Footer/>
        </>
    );
};



export default Register;