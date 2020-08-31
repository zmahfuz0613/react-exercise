import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col } from 'react-bootstrap';
import './ProductDetail.css'
const ProductDetail = () =>{

    const params = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        
        const getSingleProduct = async () => {      
        const productResult = await axios.get(`${process.env.REACT_APP_PRODUCTS_API_URL}/${params.id}`);    
            console.log(productResult.data);
            setProduct(productResult.data);
            setLoading(false);
        }
        getSingleProduct();
    }, [params]) 

    const { name,
        description,        
        price,
        imgURL
    } = product


    return (
        <Fragment>
        {loading ? 
            <h2>Loading...</h2> :     <>
                            <div className="product-detail-container">
                                <div>
                                    <Col sm="4"> <img className="product-detail-image" src={imgURL} alt={name} style={{"display": "inline-block", "float": "left", "width": "100%"}}/></Col>
                                    <Col sm="8" style={{"display": "inline-block", "float": "left"}}>
                                            <div className="detail">
                                                <div className="product-detail-name">
                                                    { name }
                                                </div>
                                                <div className="product-detail-price">
                                                    ${ price }
                                                </div>
                                                <div className="product-detail-description">
                                                    { description }
                                                </div>
                                            </div>
                                    </Col>
                                </div>
                            </div>
                                
                                
                           
            </>   
        }

        </Fragment>
    );
}

export default ProductDetail;