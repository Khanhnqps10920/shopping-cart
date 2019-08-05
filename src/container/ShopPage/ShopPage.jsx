import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Shop.scss';
import ProductList from '../../components/ProductList/ProductList';
import ShopCategories from '../../components/ShopCategories/ShopCategories';
import ListSort from '../../components/ListSort/ListSort';
import ShortingNum from '../../components/ShortingNum/ShortingNum';
import Axios from 'axios';
import { addToCart } from '../../actions/cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


class ShopPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      productList: [
      ],
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
      filterPrice: '',
      dataFetch: false,
      sortTypeItem: 'DEFAULT SORTING',
      show: 'default',
      numList: [{ title: 6, id: 1 }, { title: 12, id: 2 }, { title: 24, id: 3 }],
      sortList: [
        {
          title: 'DEFAULT SORTING',
          id: 1
        },
        {
          title: 'PRICE',
          id: 2
        },
        {
          title: 'PRODUCT NAME',
          id: 3
        }
      ]
    };
  };

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

  handlePriceChange = (e) => {
    this.setState({
      filterPrice: e.target.value
    })
  };

  handleFilterPrice = async (e) => {
    const products = await Axios.get("http://api.demo.nordiccoder.com/api/products");
    const { data } = products;


    this.setState((prevState) => {
      const filterPrice = prevState.filterPrice;
      let productList;
      console.log(products);

      if (!filterPrice) {
        productList = data.body;
      }
      else {
        productList = [...prevState.productList].filter(p => {
          return p.salePrice.toString() === filterPrice;
        });
      }

      return { productList };
    })
  }

  handleCategoryClick = async (category) => {
    const products = await Axios.get("http://api.demo.nordiccoder.com/api/products");
    const { data } = products;

    this.setState((prevState) => {
      let productList;
      if (category.name === "All") {
        productList = data.body;
      }
      else {
        productList = data.body.filter(p => {
          return p.categoryId === category.id;
        })
      }

      return { productList };
    });
  }

  handleSortClick = (sortingType) => {

    this.setState((prevState) => {

      let sortTypeItem = prevState.sortTypeItem;
      sortTypeItem = sortingType.title;
      let productList;

      if (sortingType.id === 1) {
        productList = [...prevState.productList];
      }
      else if (sortingType.id === 2) {
        productList = [...prevState.productList].sort((p1, p2) => {
          return p1.salePrice - p2.salePrice;
        });
      }
      else {
        productList = [...prevState.productList].sort((p1, p2) => {
          if (p1.name.toLowerCase() < p2.name.toLowerCase()) {
            return -1;
          }
          if (p1.name.toLowerCase() > p2.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }

      return { sortTypeItem, productList };
    })
  }

  handleNumClick = (num) => {
    this.setState((prevState) => {
      let show = prevState.show;
      show = num.title;


      return { show };
    })
  }

  handleProductClick = (product) => {
    const { history } = this.props;
    const productDetailURL = `/shop/${product.id}`;
    history.push(productDetailURL);
  }

  handleAddToCart = (e, product) => {
    e.stopPropagation();
    this.props.addToCart(product);
    console.log(this.props.cartItemList);

  }


  render() {

    let {
      productList,
      filterPrice,
      categories,
      sortList,
      sortTypeItem,
      show,
      numList
    } = this.state;


    return (

      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">


            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
              </ul>
            </div>


            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ShopCategories categories={categories} onCategoryClick={this.handleCategoryClick} />
              </div>

              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Filter by Price</h5>
                </div>
                <p>
                  <input type="text" value={filterPrice} onChange={this.handlePriceChange} id="amount" />
                </p>
                <div id="slider-range"></div>
                <div className="filter_button" onClick={this.handleFilterPrice}><span>filter</span></div>
              </div>

            </div>


            <div className="main_content">


              <div className="products_iso">
                <div className="row">
                  <div className="col">


                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">{sortTypeItem}</span>
                          <i className="fa fa-angle-down"></i>
                          {/* sortList */}
                          <ListSort sortList={sortList} onSortClick={this.handleSortClick} />
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">{show}</span>
                          <ShortingNum numList={numList} onNumClick={this.handleNumClick} />
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                          </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                      </div>

                    </div>


                    <div className="product-grid">

                      <div className="row">
                        {/* productList */}
                        <ProductList productList={productList} onAddToCartClick={this.handleAddToCart} onProductClick={this.handleProductClick} />
                      </div>
                    </div>


                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn"><span>01</span></li>
                            <li className="num_sorting_btn"><span>02</span></li>
                            <li className="num_sorting_btn"><span>03</span></li>
                            <li className="num_sorting_btn"><span>04</span></li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">Showing 1–3 of 12 results</span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                          </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

      </div >
    );
  }
}

ShopPage.propTypes = {
  addToCart: PropTypes.func
};

ShopPage.defaultProps = {
  addToCart: null
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);