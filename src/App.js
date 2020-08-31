import React from 'react';
import Header from './components/layout/Header';
import Home from './components/Home';
import {Route, Switch} from 'react-router-dom';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import './App.css';

function App() {
  return (
    <>
   <Header/>
   <Switch>
    <Route exact path="/" component={Home} />
    
    <Route exact path="/products/" component={ProductList} />

    <Route exact path="/products/:id" component={ProductDetail} />
      
    </Switch>
  </>
  );
}

export default App;
