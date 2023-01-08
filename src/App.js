import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([products]);

  console.log('products', products);
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(res => res.json())
      .then(json => setProducts(json.products))
  }, [])

  useEffect(() => {
    const newFilteredProducts = products.filter((data) => {
      return data.brand.toLowerCase().includes(searchField) || data.category.toLowerCase().includes(searchField) || data.title.toLowerCase().includes(searchField);
    })
    setFilteredProducts(newFilteredProducts);
  }, [products, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
        <h1 className='title'>Techno Shopping Center</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='You can search by brand or category or title.'
          className={'search-box'}
        />

        <CardList filteredProducts={filteredProducts} />
      </div>
      
  );

}

export default App