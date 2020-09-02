import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class Products extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  // rendering fruits on the basis of category
  render() {
    const { category } = this.props;
    const { products } = this.props.products;
    console.log('products hai', products, category);
    return (
      <div>
        {products.map((product) => {
          return (
            <div key={product._id}>
              <div>{product.title}</div>
              <img src={product.product_image} alt={product.title}></img>
              <div>{product.category}</div>
              <div>{product.marked_price}</div>
              <div>{product.selling_price}</div>
              <div>{product.stock_quantity}</div>
              <div>{product.sold_by}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

// sending store as props in component
function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
