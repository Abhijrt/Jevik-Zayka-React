import React, { Component, createRef } from 'react';
import { Input } from '../../components';
import {
  addProduct,
  clearError,
  clearMessage,
  setError,
  loadingStop,
} from '../../actions';
import { connect } from 'react-redux';
import { errorMessageAlert, successMessageAlert } from '../../helpers';

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
    this.formRef = createRef();
  }

  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
  }

  // showing notifications
  componentDidUpdate() {
    const { error, dispatch, message } = this.props;
    if (error != null) {
      errorMessageAlert(error.title, error.detail);
      dispatch(clearError());
      this.formRef.current.reset();
      this.setState({
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
      });
    }
    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
      this.formRef.current.reset();
      this.setState({
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
      });
    }
  }

  inputValidationCheck = () => {
    const {
      title,
      marked_price,
      selling_price,
      stock_quantity,
      product_image,
    } = this.state;

    const { dispatch } = this.props;

    if (title.length === 0) {
      dispatch(setError('Missing Field', 'Enter Title'));
      return false;
    } else if (marked_price.length === 0) {
      dispatch(setError('Missing Field', 'Enter Maked Price'));
      return false;
    } else if (selling_price.length === 0) {
      dispatch(setError('Missing Field', 'Enter Selling Price'));
      return false;
    } else if (stock_quantity.kilogram === 0 && stock_quantity.gram === 0) {
      dispatch(setError('Missing Field', 'Enter Stock Quantity'));
      return false;
    } else if (product_image === null) {
      dispatch(setError('Missing Field', 'Upload Product Image'));
      return false;
    }
    return true;
  };

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
          kilogram: this.state.stock_quantity.kilogram,
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
    this.setState({ product_image: e.target.files[0] });
  };

  // handle form submission
  handleAddProductButton = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    let validation = this.inputValidationCheck();
    if (!validation) {
      return;
    }
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
    const { isLoading } = this.props;
    return (
      <div className="add-product-container">
        <div className="heading">Add Product</div>
        <form ref={this.formRef}>
          <Input
            width="100%"
            type="text"
            label="Title"
            required={true}
            handleOnChange={this.handleOnChange}
            value={title}
          />
          <div className="category-container">
            <div className="category-heading">Category :-</div>
            <select
              name="cars"
              id="category"
              onChange={this.handleCategoryChange}
            >
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetable</option>
            </select>
          </div>
          <div className="product-image-container">
            <div className="product-image-heading">Product Image</div>
            <input type="file" onChange={this.handleImageInputChange} />
          </div>
          <div className="stock-quantity-container">
            <div className="stock-quantity">Stock Quantity :-</div>
            <Input
              width="100%"
              type="Number"
              label="KG"
              required={true}
              handleOnChange={this.handleOnChange}
              value={stock_quantity.kilogram}
            />
            <Input
              width="100%"
              type="Number"
              label="Gram"
              required={true}
              handleOnChange={this.handleOnChange}
              value={stock_quantity.gram}
            />
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
          <Input
            width="100%"
            type="text"
            label="Sold By (Optional)"
            required={true}
            handleOnChange={this.handleOnChange}
            value={sold_by}
          />

          <div className="add-product-button">
            <button
              type="submit"
              className="button"
              onClick={this.handleAddProductButton}
              dispabled={isLoading}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
  };
}

export default connect(mapStateToProps)(AddProduct);
