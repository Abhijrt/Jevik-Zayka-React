import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class Vegetables extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProducts());
  }
  render() {
    const { products } = this.props.products;
    return (
      <div>
        {products.map((product) => {
          if (product.category !== 'Vegetables') {
            return '';
          }
          return (
            <div key={product._id}>
              <div>{product.title}</div>
              <img
                src={product.product_image}
                alt={product.title}
                style={{ width: '100px', height: '100px' }}
              ></img>
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

export default connect(mapStateToProps)(Vegetables);
