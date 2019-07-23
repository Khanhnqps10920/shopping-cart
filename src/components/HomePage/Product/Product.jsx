import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Product extends PureComponent {
  render() {

    const { product } = this.props;
    console.log(product.name)

    return (

      <div className="product-item">
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={product.image} alt="1" />
          </div>
          <div className="favorite favorite_left"></div>
          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
          <div className="product_info">
            <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
            <div className="product_price">${product.salePrice}<span>${product.original}</span></div>
          </div>
        </div>
        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
      </div>

    );
  }
}

Product.propTypes = {
  product: PropTypes.object
};

Product.defaultProps = {
  product: {}
}

export default Product;