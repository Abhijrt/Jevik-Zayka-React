import React, { Component } from 'react';
import { Input } from '../../components';

class AddProduct extends Component {
  handleOnChange = (label, value) => {
    console.log('working');
  };

  render() {
    return (
      <div className="add-product-container">
        <div className="heading">Add Product</div>
        <form>
          <Input
            width="100%"
            type="text"
            label="Title"
            required={true}
            handleOnChange={this.handleOnChange}
            value={'abc'}
          />
          <Input
            width="100%"
            type="text"
            label="Username"
            required={true}
            handleOnChange={this.handleOnChange}
            value={'abc'}
          />
          <Input
            width="100%"
            type="text"
            label="Password"
            required={true}
            handleOnChange={this.handleOnChange}
            value={'abc'}
          />
          <Input
            width="100%"
            type="text"
            label="Login"
            required={true}
            handleOnChange={this.handleOnChange}
            value={'abc'}
          />
          <Input
            width="100%"
            type="text"
            label="Other"
            required={true}
            handleOnChange={this.handleOnChange}
            value={'abc'}
          />
        </form>
      </div>
    );
  }
}

export default AddProduct;
