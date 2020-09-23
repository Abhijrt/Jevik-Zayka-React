import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import ProductItem from './ProductItem';

class Products extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }

  // rendering fruits on the basis of category
  render() {
    // const { category } = this.props;
    const { products } = this.props.products;
    return (
      <div className="product-container">
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
        {products.map((product) => {
          return <ProductItem product={product} />;
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
