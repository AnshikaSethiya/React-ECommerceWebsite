import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product';

const Products = () => {
    const products = [
        { id:1, name:'Shoes', description:'Running Shoes', price:'Rs 2000', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' },
        { id:2, name:'Watch', description:'Women Watch', price:'Rs 1500', image:'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
    ]

    return (
        <main>
            <Grid container justify="center" spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))
            }

            </Grid>
        </main>
    )
}

export default Products
