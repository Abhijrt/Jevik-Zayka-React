import React, { Component } from 'react';
import { Input } from '../../components';
import { addProduct } from '../../actions';
import { connect } from 'react-redux';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Fruits',
      marked_price: '',
      selling_price: '',
      sold_by: '',
      stock_quantity: {
        kilogram: 0,
        gram: 0,
      },
      product_image: null,
    };
  }

  // handleling form changes for various values
  handleOnChange = (label, value) => {
    if (label === 'Title') {
      this.setState({ title: value });
    } else if (label === 'Marked Price') {
      this.setState({ marked_price: value });
    } else if (label === 'Selling Price') {
      this.setState({ selling_price: value });
    } else if (label === 'Sold By (Optional)') {
      this.setState({ sold_by: value });
    } else if (label === 'KG') {
      this.setState({
        stock_quantity: {
          kilogram: value,
          gram: this.state.stock_quantity.gram,
        },
      });
    } else if (label === 'Gram') {
      this.setState({
        stock_quantity: {
          kilogram: this.state.stock_quantity.gram,
          gram: value,
        },
      });
    }
  };

  // handle cateogory change to save change in state
  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  // handle product image input change
  handleImageInputChange = (e) => {
    console.log('image', e.target.files[0]);
    this.setState({ product_image: e.target.files[0] });
  };

  // handle form submission
  handleAddProductButton = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    let formData = { ...this.state };
    let stock_quantity =
      parseInt(formData.stock_quantity.kilogram) * 1000 +
      parseInt(formData.stock_quantity.gram);
    formData.stock_quantity = stock_quantity;
    dispatch(addProduct(formData));
  };

  render() {
    const {
      title,
      marked_price,
      selling_price,
      sold_by,
      stock_quantity,
    } = this.state;
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
            value={title}
          />
          <div>
            <div>Category</div>
            <select
              name="cars"
              id="category"
              onChange={this.handleCategoryChange}
            >
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetable</option>
            </select>
          </div>
          <Input
            width="100%"
            type="Number"
            label="Marked Price"
            required={true}
            handleOnChange={this.handleOnChange}
            value={marked_price}
          />
          <Input
            width="100%"
            type="Number"
            label="Selling Price"
            required={true}
            handleOnChange={this.handleOnChange}
            value={selling_price}
          />
          <div>
            <div>Stock Quantity</div>
            <Input
              width="40%"
              type="Number"
              label="KG"
              required={true}
              handleOnChange={this.handleOnChange}
              value={stock_quantity.kilogram}
            />
            <Input
              width="40%"
              type="Number"
              label="Gram"
              required={true}
              handleOnChange={this.handleOnChange}
              value={stock_quantity.gram}
            />
          </div>
          <Input
            width="100%"
            type="text"
            label="Sold By (Optional)"
            required={true}
            handleOnChange={this.handleOnChange}
            value={sold_by}
          />
          <div className="product-image">
            <div>Product Image</div>
            <input
              type="file"
              placeholder="Image"
              onChange={this.handleImageInputChange}
            />
          </div>
          <div className="add_product-button">
            <button
              type="submit"
              className="button"
              onClick={this.handleAddProductButton}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddProduct);
