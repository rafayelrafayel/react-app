import React, { Component } from 'react';
import {connect} from 'react-redux';
class ViewProducts extends Component {
    render() {
        
        return (
                <div className="view-products-form col-6">
                    <table>
                        <tbody>
                            <tr><th>Name</th><td>AAAA</td></tr>
                        </tbody>
                    </table>
                </div>
                );
    }
}

const mapStateToProps = state => ({
        product: state
    });

export default connect(mapStateToProps)(ViewProducts); 