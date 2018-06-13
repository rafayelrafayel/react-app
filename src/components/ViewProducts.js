import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import _ from 'lodash';

import { getProduct } from '../actions/products';
class ViewProducts extends Component {
   
    render() {

        return (
                <div className="view-products-form col-6">
                    <table className="table table-bordered table-stripped">
                        <tbody>
                            <tr><th>Price</th><td>{this.props.product.price}</td></tr>
                            <tr><th>Name</th><td>{this.props.product.name}</td></tr>
                            <tr><th>Description</th><td>{this.props.product.description}</td></tr>
                            <tr><th>Create Date</th><td>{this.props.product.create_date}</td></tr>
                        </tbody>
                    </table>
                     <Link to={'/'} className="btn btn-success float-left m-bottom-20">Back</Link>
                </div>
                );
    }
}

const mapDispatchToProps = {
    getProduct
};


const mapStateToProps = (state, props) => ({
  product: _.find(state, {'id': parseInt(props.match.params.id)})
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);

