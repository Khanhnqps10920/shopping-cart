import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

class ProductList extends PureComponent {
  render() {

    const { productList } = this.props

    return (
      <div className="row">
        {productList.map((p) => {
          return <Product key={p.id + 1} product={p} />
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array.isRequired
};

export default ProductList;