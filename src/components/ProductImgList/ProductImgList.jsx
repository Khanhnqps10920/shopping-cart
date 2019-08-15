import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductImgItem from '../ProductImgItem/ProductImgItem';

class ProductImgList extends PureComponent {
  render() {

    const { productImgList, onImageClick, className, isActive } = this.props;

    return (
      <ul>
        {
          productImgList.map((img, index) => {
            return <ProductImgItem
              isActive={isActive}
              productImg={img} key={index}
              onClick={() => onImageClick(img, index)}
              idx={index}
            />
          })
        }
      </ul>
    );
  }
}

ProductImgList.propTypes = {
  productImgList: PropTypes.array,
  onImageClick: PropTypes.func,
  isActive: PropTypes.number
};

ProductImgList.defaultProps = {
  productImgList: null,
  onImageClick: null,
  isActive: 0
}

export default ProductImgList;