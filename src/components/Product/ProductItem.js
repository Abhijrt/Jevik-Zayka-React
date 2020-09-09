import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div key={product._id} className="product-item-container">
        <div className="product-image">
          <img src={product.product_image} alt={product.title} />
        </div>
        <div className="product-item-detail-container">
          <div className="product-title">{product.title}</div>
          <div className="product-price-container">
            <div className="product-price">
              <i class="fa fa-inr" aria-hidden="true"></i>
              {product.selling_price}
              <span className="product-marked-price">
                <i class="fa fa-inr" aria-hidden="true"></i>
                {product.marked_price}
              </span>
            </div>
            <div className="product-marked-price"></div>
            <div className="product-discount">12% off</div>
          </div>
          <div className="product-desc">
            An apple a day keeps the doctor away...An apple a day keeps the
            doctor away... An apple a day keeps the doctor away
          </div>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
