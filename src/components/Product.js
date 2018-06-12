import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Product extends Component {

   
    render() {
        return  (<tr>
            <td>{this.props.product.id}</td>
            <td>{this.props.product.price}</td>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>{this.props.product.create_date}</td>
            <td>
               <Link to={'/product/view/' + this.props.product.id} className="btn btn-success">View</Link>
                <Link to={'/product/edit/' + this.props.product.id} className="btn btn-warning">Edit</Link>
                <a href={'/product/delete/' + this.props.product.id} className="btn btn-danger">Delete</a>
            </td>
        </tr>);
    }
    ;
}


export default Product;
