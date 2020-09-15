import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div key={product._id} className="product-item-container">
        <div className="container">
          <div className="product-image">
            <Link to={'/product/' + product._id}>
              <img src={product.product_image} alt={product.title} />
            </Link>
          </div>
          <div className="item-detail-container">
            <Link className="title" to={'/product/' + product._id}>
              {product.title}
            </Link>
            <div className="rating-quantity-container">
              <div className="rating">
                <div>Rating</div>
                <div>
                  <i className="fa fa-star" aria-hidden="true" key="1"></i>
                  <i className="fa fa-star" aria-hidden="true" key="2"></i>
                  <i className="fa fa-star" aria-hidden="true" key="3"></i>
                  <i className="fa fa-star" aria-hidden="true" key="4"></i>
                  <i className="fa fa-star" aria-hidden="true" key="5"></i>
                </div>
              </div>
              <div className="quantity">
                <div>Quantity</div>
                <select name="qty">
                  <option value="250" key="250">
                    250 G
                  </option>
                  <option value="500">500 G</option>
                  <option value="1000">1 KG</option>
                  <option value="1500">1.5 KG</option>
                </select>
              </div>
            </div>
            <div className="price-cart-container">
              <div className="price-container">
                <div className="price">
                  Rs 200 <span>Rs 100</span>
                </div>
                <div className="discount">12% off</div>
              </div>
              <div className="cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
