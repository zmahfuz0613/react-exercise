import React from 'react';
import Card  from 'react-bootstrap/Card';
import './ProductCard.css';
const ProductCard = ({product}) => {

   const { _id, name, imgURL, price} =  product;

    return(
        
   <div>
      <a style={{ cursor: 'pointer' }} href={`/products/${_id}`}>
    <div className="product">
    <Card.Img variant="top" src={imgURL} style={{ "width": "350px"}}/>
    <Card.Body>
      <Card.Title className="product-name">{ name }</Card.Title>
      <Card.Text className="price">
         $ { price }
      </Card.Text>
    </Card.Body> 
  </div>
  </a>
  </div>
        
    );
}

export default ProductCard;