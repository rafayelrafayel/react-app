import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './Products';

class Home extends Component {
    render() {
        const {products}=this.props;
        return (
                <div className="home-components">
                    <Products products={products} />
                </div>
                );
    }
    ;
}
;

const mapStateToProps = state => ({
        products: state
    });

export default connect(mapStateToProps)(Home);
