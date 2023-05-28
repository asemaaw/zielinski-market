import React from 'react';

const Api = () => {
    const fetchDataByCategory = async (category) => {
        try {
          const response = await fetch(`http://localhost:3004/products?category=${category}`); 
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Ошибка получения данных:', error);
        }
      }
    return (
        <div>

        </div>
    );
};

export default Api;