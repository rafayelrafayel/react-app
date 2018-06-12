import React, { Component }
from 'react';
import Product from './Product';

import {Link} from 'react-router-dom';



class Products extends Component {

   
    render() {

        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 m-bottom-20">
                            <div className="pull-left"></div> 
                            <div className="pull-right"></div> 
                        </div>
                        <div className="col-md-12">
                            <Link to={'/product/add/'} className="btn btn-success float-left m-bottom-20">Add product</Link>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Price</td>
                                        <td>Name</td>
                                        <td>Description</td>
                                        <td>Creation Date </td>
                                        <td># </td>
                                    </tr>              
                                </thead>
                                <tbody className="products">
                                    {this.props.products.map(function (product, key) {
                                                return  <Product key={product.id} product={product} />;
                                }
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                            );
            }
        }
        ;

        export default Products;