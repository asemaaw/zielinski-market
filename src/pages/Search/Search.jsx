import React, { useState, useEffect } from 'react';
import './search.scss'

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
        
    //     searchProducts();
    //   }, [keyword, price, category]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      
    // Очистка полей формы
    setKeyword('');
    setPrice('');
    setCategory('');
  };
    return (
        <section>
        
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
          <button type="submit">Search</button>
        </form>
        {/*результаты поиска */}
      </section>
    );
};

export default Search;