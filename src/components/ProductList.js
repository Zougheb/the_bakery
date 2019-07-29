import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import Jumbotron from './Jumbotron'
import{ProductConsumer} from '../context';



export default class ProductList extends Component {
    render() {
        return (
         <React.Fragment>
                <Jumbotron />
             <div className="py-5">
                 <div className="container">
                     <Title name="our" title="Menu"/> 
                     <div className="row">
                        <ProductConsumer>
                           {(value)=>{
                            return value.products.map(product =>{
                                return <Product key={product.id}
                                product={product} />
                            })
                           }} 
                        </ProductConsumer>
                     </div>
                 </div>
             </div>
         </React.Fragment>         
        );
    }
}