import React, { useState } from 'react';
import './add.scss'
import Footer from '../../components/Footer/Footer';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');


  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3004/newproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, price, category, image }),
      });

      if (response.ok) {
        alert('Продкукт успешно добавлен');
        setTitle('');
        setPrice('');
        setCategory('');
        setImage('');
      } else {
        throw new Error('Произошла ошибка');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  return (
    <>
    <div className='addproduct'>
      <h2>Добавление продукта</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
         <input
          type="text"
          placeholder="URL картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AddProductForm;