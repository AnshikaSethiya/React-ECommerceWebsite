import React,{useCallback} from 'react';
import { Col } from 'reactstrap';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
  } from 'reactstrap';
import products from '../../db/products.json'
import { useCartDispatch } from '../../lib/cart.context';

import './Products.style.css'

const Products = () => {
  const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id,price,inStock) => {
      if(!inStock){
        return;
      }

      dispatchCart({type:'ADD_ONE',id,price})
    },
    [dispatchCart]
  )

  if(products.length === 0){
    return <div>No products Found </div>
  }
  return(
    <>
    <div className="p-div">
                <div className="p-text">
                    <h2>NEW ARRIVALS</h2>
                </div>
      </div>
    <Col>
      <h1 className="h2 text-center product-head"> All Featured Products </h1>
      <br />
      <div className="product-container-flex">
        {
          products.map(
            ({
              currency,
              delivery,
              inStock,
              name,
              price,
              thumbnail,
              ...restofProducts
            }) => (
              <Card key={restofProducts.id} className="individual-products-card"> 
                <CardImg src={thumbnail} alt={name} className="products-img"/>
                <CardBody className="font-weight" style={{backgroundColor:'#99B898'}}>
                  <CardTitle className="h5">{name}</CardTitle>
                  <CardSubtitle className="h6 mb-2">Rs. {price}</CardSubtitle>
                  {delivery && <CardText className="mb-1"> Delivery available</CardText>}
                  <CardText className={inStock ? 'text-success' : 'text-danger'}>
                    {inStock ? 'In Stock' : 'Out of stock'}
                  </CardText>
                  <Button 
                      type="button"
                      disabled={!inStock}
                      className="card-button btn-product"
                      onClick={() => handleAddToCart(restofProducts.id, price, inStock)}>
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            )
          )
        }
      </div>
    </Col>
    </>
  )
}

export default Products
