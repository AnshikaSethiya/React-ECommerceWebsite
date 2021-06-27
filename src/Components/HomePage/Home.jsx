import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import categories from '../../db/categories.json'
import './Home.style.css'



const Home = () => {
    return (
        <>
            <div className="f-div">
                <div className="f-text">
                    <h3>BEST OFFER</h3>
                    <h2>NEW ARRIVALS ON SALE</h2>
                </div>
            </div>

            <div className="categories-sec">
              <h2>Categories</h2>
              <br />
              <div className="cat-card">
                {categories.map(c => ( 
                    <Card className="card__">
                        <CardImg top src={c.image} alt="Card image cap" className="card__img"/>
                        <CardBody>
                            <CardTitle tag="h5">{c.name}</CardTitle>
                            <CardText style={{ wordWrap: 'break-word'}}>{c.description}</CardText>
                            <Link to={`/category/${c.id}`} key={c.id}>
                              <Button className="card__btn" >View Products</Button>
                            </Link>
                        </CardBody>
                    </Card>
                     ))}
               </div>
            </div>


            <div className="footer">
                

            </div>
            
            
        </>
    )
}

export default Home
