import React, { Component } from 'react';
import { connect } from 'react-redux';
import { successMessageAlert, errorMessageAlert } from '../../helpers';
import { clearProductDetail } from '../../actions';
import {
  getProductDetail,
  loadingStop,
  clearError,
  clearMessage,
} from '../../actions';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { error, dispatch, message, isLoading } = this.props;
    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
    }

    if (error != null) {
      errorMessageAlert('Registration Error', error);
      dispatch(clearError());
    }
    if (isLoading === true) {
      dispatch(loadingStop());
    }

    // fetching product detail on mounting with product id
    this.props.dispatch(getProductDetail(this.props.match.params.product_id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  render() {
    const { product } = this.props;
    console.log(product);
    if (product === null) {
      return (
        <div className="product-detail-container">
          <div className="container"></div>
        </div>
      );
    }
    return (
      <div className="product-detail-container">
        <div className="container">
          <div className="img-container">
            <img src={product.product_image} alt={product.title} />
          </div>
          <div className="detail-container">
            <div className="title">{product.title}</div>
            <div className="price-container">
              <div className="price">
                <span className="selling-price">
                  Rs {product.selling_price}
                </span>
                <span className="marked-price">Rs {product.marked_price}</span>
              </div>
              <div className="discount">12% off</div>
            </div>
            <div className="rating">
              <div>Rating</div>
              <div className="star">
                <i className="fa fa-star" aria-hidden="true" key="1"></i>
                <i className="fa fa-star" aria-hidden="true" key="2"></i>
                <i className="fa fa-star" aria-hidden="true" key="3"></i>
                <i className="fa fa-star" aria-hidden="true" key="4"></i>
                <i className="fa fa-star" aria-hidden="true" key="5"></i>
              </div>
            </div>
            <div className="quantity-container">
              Quantity
              <select name="qty">
                <option value="250" key="250">
                  250 G
                </option>
                <option value="500">500 G</option>
                <option value="1000">1 KG</option>
                <option value="1500">1.5 KG</option>
              </select>
            </div>
            <div className="add-to-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.products.productDetail,
    message: state.alert.message,
    error: state.alert.error,
    isLoading: state.progress.isLoading,
  };
}
export default connect(mapStateToProps)(ProductDetail);
