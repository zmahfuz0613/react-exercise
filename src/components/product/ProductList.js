import React, { useState, Fragment, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import './ProductList.css';
const ProductList = () => {

   //Products
   const [products, setProducts] = useState([]);
   const [productsBackup, setProductsBackup] = useState([]);
   const [loading, setLoading] = useState(true);

    //Get products
    useEffect(() => {
    
    const getProducts = async () => {      
        const productsResult = await axios.get(`${process.env.REACT_APP_PRODUCTS_API_URL}`);
        
        setProducts(productsResult.data);
        setProductsBackup(productsResult.data);      
        
        setLoading(false);   
    }
    getProducts();
    }, [])

    const handleSort=(e)=>{
        debugger;
        let value = parseInt(e);

        if(value === 0){
            orderProductsByAscending();
        }
        else if(value === 1){
            orderProductsByDescending();
        }
        else if(value === 2){
            orderProductsByPriceAscending();
        }
        else{
            orderProductsByPriceDescending();
        }
      }

    const orderProductsByAscending = () => {
        const sortedProducts = [...productsBackup].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(sortedProducts);
    }

    const orderProductsByDescending = () => {        
        const sortedProducts = [...productsBackup].sort((a, b) => b.name.localeCompare(a.name));
        setProducts(sortedProducts);
    }

    const orderProductsByPriceAscending = () => {        
        const sortedProducts = [...productsBackup].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setProducts(sortedProducts);
    }

    const orderProductsByPriceDescending = () => {                
        const sortedProducts = [...productsBackup].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setProducts(sortedProducts);
    }

   const resultProducts = products.map(product => {                                    
        return <ProductCard key={product._id} id={product._id} product={product} />
     });
   
     const handleSearch = (e) => {
         debugger;
         if(e === ''){
            setProducts(productsBackup);
         }else{
            const sortedProducts = [...productsBackup].filter(x=> x.name.toLowerCase().includes(e.target.value));
            setProducts(sortedProducts);
         }
      
     }
 return (
  <Fragment>
    
   <div className="container product-container">
   <Form.Control size="lg" type="text" placeholder="Search" onChange={handleSearch}/>
        <div className="dropdown-sort">
       <DropdownButton alignRight title="SORT BY: " id="dropdown-basic-button" onSelect={handleSort}>
            <Dropdown.Item eventKey="0">  Alphabetically, A-Z  </Dropdown.Item>
            <Dropdown.Item eventKey="1">  Alphabetically, Z-A  </Dropdown.Item>
            <Dropdown.Item eventKey="2">  Price, low to high  </Dropdown.Item>
            <Dropdown.Item eventKey="3">  Price, high to low    </Dropdown.Item>
        </DropdownButton>
        </div>   
       
   <div className="row">
   <CardDeck>
          {loading ? 
                    <h2>Loading...</h2> :                            
                   
                                resultProducts
                                       
                              }
                              </CardDeck>      
                             
                              </div>
      </div>
  </Fragment>
);

}

export default ProductList;
