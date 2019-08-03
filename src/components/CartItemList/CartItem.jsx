import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeFromCart } from '../../actions/cart';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleRemove = (product) => {
    const confirmMess = `Muốn xóa item ${product.product.name} thiệt hk?`;
    if (window.confirm(confirmMess)) {
      this.props.removeFromCart(product);
    }
  }

  render() {

    const { product } = this.props;
    const productChildren = product.product;
    return (
      <div className="cart__item">
        <div className="item__dflex-left">
          <div className="dflex-left__img">
            <img src={productChildren.image} alt="" />
          </div>
          <div className="dflex-left__content">
            <h5>{productChildren.name}</h5>
            <span>{productChildren.salePrice}$ for 1 item</span>
            <p onClick={() => this.handleRemove(product)}><i className="fas fa-trash-alt"></i> DELETE FROM CART</p>
          </div>
        </div>
        <div className="item__dfex-right">
          <div className="quantity_selector">
            <span className="minus"
            ><i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <span id="quantity_value">{product.quantity}</span>
            <span className="plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.object,
};

CartItem.defaultProps = {
  product: {},
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeFromCart
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);