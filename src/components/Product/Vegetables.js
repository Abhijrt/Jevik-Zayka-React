import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import ProductItem from './ProductItem';

class Vegetables extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }
  render() {
    const { products } = this.props.products;
    return (
      <div className="product-container">
        {products.map((product) => {
          if (product.category !== 'Vegetables') {
            return '';
          }
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

export default connect(mapStateToProps)(Vegetables);
