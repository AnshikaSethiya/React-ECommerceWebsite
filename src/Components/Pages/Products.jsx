import React,{useCallback} from 'react'
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

import '../products.style.css'

const Products = () => {
 const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        return;
      }

      dispatchCart({ type: 'ADD_ONE', id, price });
    },
    [dispatchCart]
  );

  if (products.length === 0) {
    return <div>No products found</div>;
  }
    
  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
    <div className="product-flex">
      <Card key={restOfProduct.id} className="individual-card">
        <CardImg src={thumbnail} alt={name} className="h-50" />
        <CardBody className="font-weight">
          <CardTitle className="h5">{name}</CardTitle>
          <CardSubtitle className="h6 mb-2">Rs. {price}</CardSubtitle>
          {delivery && <CardText className="mb-1">Delivery available</CardText>}
          <CardText className={inStock ? 'text-success' : 'text-danger'}>
            {inStock ? 'In stock' : 'Out of stock'}
          </CardText>
          <Button
            type="button"
            disabled={!inStock}
            className="cart-button hover-filled-slide-right"
            onClick={() => handleAddToCart(restOfProduct.id, price, inStock)}
          >
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </div>
  )
  );
  
}

export default Products
