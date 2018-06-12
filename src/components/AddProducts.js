import React, { Component } from 'react';
class AddProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: "",
            name: "",
            description: "",
            create_date: ""
        };
        console.log(props.match.params.id);

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    addProduct(e) {
        e.preventDefault();
        this.props.addProduct(this.state);
    }

    onChangeValue(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
                <div className="add-products-form col-6">
                    <form onSubmit={this.addProduct}>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input className="form-control" type="text" value={this.state.price} onChange={this.onChangeValue} id="price" name="price"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control"  type="text" value={this.state.name} onChange={this.onChangeValue} id="name" name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control"  id="description" value={this.state.description} onChange={this.onChangeValue} name="description"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="create_date">Create Date</label>
                            <input className="form-control"  type="text" value={this.state.create_date} onChange={this.onChangeValue} id="create_date" name="create_date"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
                );
    }
}

export default AddProducts;