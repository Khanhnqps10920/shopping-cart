import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NewArrival.css';
import ProductList from '../ProductList/ProductList';
import Categories from '../Categories/Categories';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

class NewArrival extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ctg: null,
      productList: [

      ],
      dataFetch: false,
      categories: [{
        "id": "5b822e7f9c300309b7e9befc",
        "name": "men",
        "iconName": "men"
      },
      {
        "id": "5b822e919c300309b7e9bf0e",
        "name": "women",
        "iconName": "women"
      },
      {
        "id": "5b822ea99c300309b7e9bf13",
        "name": "accessories",
        "iconName": "accessories"
      },
      {
        "id": "5c247ffadce5fc028675484b",
        "name": "All",
        "iconName": "All"
      },
      ],
    }
  }

  async componentDidMount() {
    try {
      const products = await Axios.get("http://api.demo.nordiccoder.com/api/products");
      const { data } = products;
      const productList = data.body;


      this.setState({
        dataFetch: true,
        productList
      })
    } catch (error) {
      console.log(error);
    }
  }

  handleCategoriesClick = (category) => {

    this.setState((prevState) => {

      let ctg = prevState.ctg;
      if (category.name === 'All') {
        ctg = null;
      }
      else {
        ctg = { ...category };
      }
      // const productList = [...prevState.productList].filter((p) => p.id === category.id);

      return { ctg };
    })

  }

  handleProductClick = (product) => {
    const { history } = this.props;
    const productDetailURL = `/shop/${product.id}`;
    history.push(productDetailURL);
  }

  handleAddToCart = (e, product) => {
    e.stopPropagation();
    this.props.onAddToCart(product);
    console.log(this.props.cartItemList);

  }


  render() {

    const { productList, categories, ctg, dataFetch } = this.state;


    let testList;

    if (ctg === null) {
      testList = productList;
    } else {
      testList = [...productList].filter((p) => {
        return p.categoryId === ctg.id;
      })
    }


    let products;
    if (!dataFetch) {
      products = <p>Đang lấy dữ liệu đợi xíu !!!!!</p>
    }
    else {
      products = <ProductList productList={testList} onProductClick={this.handleProductClick} onAddToCartClick={this.handleAddToCart} />
    }



    return (
      <div>

        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2 onClick={this.handleNewArrival}>New Arrivals</h2>
                </div>
              </div>
            </div>

            <Categories onCategoriesClick={this.handleCategoriesClick} categories={categories} />
            {products}

          </div>
        </div>
      </div>

    );
  }
}

NewArrival.propTypes = {
  cartItemList: PropTypes.array,
  onAddToCart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartItemList: state.cart.cartItemList,
  }
};

const mapActionToProps = {
  onAddToCart: addToCart
}

export default withRouter(connect(mapStateToProps, mapActionToProps)(NewArrival));