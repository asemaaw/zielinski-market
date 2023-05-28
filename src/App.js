import React, { useEffect, useState } from 'react';
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Favourite from './pages/Favourite/Favourite';
import Basket from './components/Basket/Basket';
import Search from './pages/Search/Search';
import SingleCard from './pages/SingleCard/SingleCard';
import Layout from './Layout/Layout';
import Catalog from './pages/Catalog/Catalog';
import './App.scss'
import New from './pages/New/New';
import Parfume from './pages/Parfume/Parfume';
import Body from './pages/Body/Body';
import House from './pages/House/House';
import Hand from './pages/Hand/Hand';
import Face from './pages/Face/Face';
import HomeOne from './pages/HomeOne/HomeOne';
import axios from 'axios'
import Questions from './pages/Questions/Questions';
import Friends from './pages/Friends/Friends';
import Set from './pages/Set/Set';
import Vibes from './pages/Vibes/Vibes';
import AddProductForm from './pages/AddProductForm/AddProductForm';






const App = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
          axios('http://localhost:3004/products')
          .then(({data})=>setProducts(data))
        }, []);
        console.log(products);
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='favourite' element={<Favourite/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='basket' element={<Basket/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='singlecard' element={<SingleCard/>}/>
                <Route path='catalog' element={<Catalog/>}/>
                <Route path='new' element={<New/>}/>
                <Route path='parfume' element={<Parfume/>}/>
                <Route path='body' element={<Body/>}/>
                <Route path='house' element={<House/>}/>
                <Route path='hand' element={<Hand/>}/>
                <Route path='face' element={<Face/>}/>
                <Route path='homeone' element={<HomeOne/>}/>
                <Route path='questions' element={<Questions/>}/>
                <Route path='friends' element={<Friends/>}/>
                
                <Route path="singlecard/:id" element={<SingleCard/>} />
                
                <Route path='set' element={<Set/>}/>
                {/* <Route path='se' element={<Vibes/>}/> */}
                <Route path='addproduct' element={<AddProductForm/>}/>
                
                
            </Route>
        </Routes>
            
        </>
    );
};

export default App;