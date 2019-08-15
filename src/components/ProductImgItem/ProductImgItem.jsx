import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductImgItem extends PureComponent {
  render() {

    const { productImg, onClick, isActive, idx } = this.props;
    return (
      <li className={isActive === idx ? 'active' : ''} onClick={onClick}><img src={productImg} alt="" data-image={productImg} /></li>
    );
  }
}

ProductImgItem.propTypes = {
  productImg: PropTypes.string,
  onClick: PropTypes.func,
};

ProductImgItem.defaultProps = {
  productImg: "",
  onClick: null,
}

export default ProductImgItem;