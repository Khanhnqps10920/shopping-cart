import React, { PureComponent } from 'react';
import qs from 'query-string'

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
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoryApi';
import NumbersOfPage from '../../components/NumbersOfPage/NumbersOfPage';

const Filter = (filter, categoryId, salePrice) => {
  let newfilter = { ...filter };

  if (categoryId) {
    newfilter.categoryId = categoryId;
    newfilter.salePrice = salePrice;
  }
  else {
    newfilter.salePrice = salePrice;
  }
  delete newfilter.where;

  return newfilter;
}


class ShopPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      productList: [
      ],
      categories: [
      ],
      filterPrice: 0,
      dataFetch: false,
      sortTypeItem: 'DEFAULT SORTING',
      show: 'default',
      numList: [{ title: 6, id: 1 }, { title: 12, id: 2 }, { title: 24, id: 3 }],
      pages: [],
      sortList: [
        {
          title: 'DEFAULT SORTING',
          id: ''
        },
        {
          title: 'PRICE',
          id: 'salePrice desc'
        },
        {
          title: 'PRODUCT NAME',
          id: 'name desc'
        }
      ],
      totalPage: 0,
      filter: {
        skip: 0,
        limit: 12,
        order: '',
        where: {
          salePrice: { gte: 0 },
        }
      },
      currentPage: 1,
    };
  };

  async componentDidMount() {
    try {

      const { location } = this.props;
      console.log(location);

      const filter = { ...this.state.filter };
      if (location.search) {
        const filterOnLocation = qs.parse(location.search);
        if (filterOnLocation.categoryId) {
          filter.where.categoryId = filterOnLocation.categoryId;
        }
        else {
          delete filter.where.categoryId;
        }

        //cant clone
        filter.skip = filterOnLocation.skip - 0;
        filter.limit = filterOnLocation.limit - 0;
        filter.order = filterOnLocation.order;
        filter.where.salePrice.gte = filterOnLocation.salePrice - 0;
      }
      console.log(filter);


      const params = {
        filter: JSON.stringify(filter)
      }
      const data = await productApi.getAll(params);
      console.log(data);
      const { body: productList } = data;

      const { limit: limit, total: total } = data.pagination;

      const totalPage = Math.ceil((total / limit));

      const pages = new Array(totalPage);

      for (let i = 0; i < pages.length; i++) {
        pages[i] = i + 1;
      }

      console.log(location);

      const categoryList = await categoriesApi.getAll();

      const { body: categories } = categoryList;

      categories.push({ id: "all", name: "All" });

      this.setState({
        dataFetch: true,
        categories,
        productList,
        totalPage,
        pages
      })


    } catch (error) {
      console.log(error);
    }
  }


  //price
  handlePriceChange = (e) => {
    this.setState({
      filterPrice: e.target.value
    })
  };

  handleFilterPrice = async (e) => {
    this.setState({
      dataFetch: false
    })
    const { filterPrice } = this.state;
    const filter = {
      ...this.state.filter
    }
    try {

      const { history, location } = this.props;

      filter.where.salePrice.gte = filterPrice - 0;
      this.setState({
        filter
      })
      const params = {
        filter: JSON.stringify(filter)
      }
      const data = await productApi.getAll(params);
      console.log(data);
      const { body: productList } = data;


      this.setState({
        dataFetch: true,
        filter,
        productList
      })
      console.log(this.state.filter);

      const newFilter = Filter(filter, !filter.where.categoryId ?
        null : filter.where.categoryId,
        filter.where.salePrice.gte);

      history.push({
        pathname: location.pathname,
        search: qs.stringify(newFilter)
      })

    }
    catch (e) {
      console.log(e);
    }

  }


  //category
  handleCategoryClick = async (category) => {

    const { history, location } = this.props;

    this.setState({
      dataFetch: false,
    })

    let filter = { ...this.state.filter }

    try {


      if (category.id === "all") {
        delete filter.where.categoryId;
      }
      else {
        filter.where.categoryId = category.id;
      }
      this.setState({
        filter
      })

      const params = {
        filter: JSON.stringify(filter)
      }


      const products = await productApi.getAll(params);
      const { body: productList } = products;
      console.log(filter, products);

      this.setState({
        dataFetch: true,
        productList
      });


      const newFilter = Filter(filter, !filter.where.categoryId ?
        null : filter.where.categoryId,
        filter.where.salePrice.gte);

      history.push({
        pathname: location.pathname,
        search: qs.stringify(newFilter)
      });

    } catch (e) {
      console.log(e);
    }

  }


  //sort
  handleSortClick = async (sortingType) => {
    const { history, location } = this.props;

    const filter = { ...this.state.filter };

    try {
      filter.order = sortingType.id;
      this.setState({
        filter
      })

      const params = {
        filter: JSON.stringify(filter)
      }

      const products = await productApi.getAll(params);
      const { body: productList } = products;
      console.log(filter, products);

      this.setState({
        productList,
        sortTypeItem: sortingType.title
      });


      const newFilter = Filter(filter, !filter.where.categoryId ?
        null : filter.where.categoryId,
        filter.where.salePrice.gte);

      history.push({
        pathname: location.pathname,
        search: qs.stringify(newFilter)
      });

    } catch (e) {
      console.log(e);
    }

  }

  //change page
  handleChangePageClick = async (page) => {
    const { history, location } = this.props;

    try {
      this.setState({
        dataFetch: false
      })
      const filter = { ...this.state.filter };
      filter.skip = (page - 1) * filter.limit;
      this.setState({
        filter
      })

      const params = {
        filter: JSON.stringify(filter)
      }
      console.log(filter);


      const products = await productApi.getAll(params);
      const { body: productList } = products;

      this.setState({
        dataFetch: true,
        productList,
        currentPage: page
      });



      const newFilter = Filter(filter, !filter.where.categoryId ?
        null : filter.where.categoryId,
        filter.where.salePrice.gte);

      history.push({
        pathname: location.pathname,
        search: qs.stringify(newFilter)
      });

    } catch (e) {
      console.log(e)
    }

  }

  //numclick
  handleNumClick = async (num) => {

    const { history, location } = this.props;

    const filter = { ...this.state.filter };

    try {

      filter.limit = num.title;
      this.setState({
        filter
      });

      const params = {
        filter: JSON.stringify(filter)
      }

      const products = await productApi.getAll(params);
      const { body: productList } = products;

      const { limit: limit, total: total } = products.pagination;

      const totalPage = Math.ceil((total / limit));

      const pages = new Array(totalPage);

      for (let i = 0; i < pages.length; i++) {
        pages[i] = i + 1;
      }
      console.log(filter);


      this.setState({
        productList,
        show: num.title,
        totalPage,
        pages
      });


      const newFilter = Filter(filter, !filter.where.categoryId ?
        null : filter.where.categoryId,
        filter.where.salePrice.gte);

      history.push({
        pathname: location.pathname,
        search: qs.stringify(newFilter)
      });


    } catch (e) {
      console.log(e);
    }

  }


  //productClick
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

    const { location } = this.props;
    console.log(location);

    let {
      productList,
      filterPrice,
      categories,
      sortList,
      sortTypeItem,
      show,
      numList,
      dataFetch,
      totalPage,
      pages,
      currentPage,
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
                  <input
                    type="range"
                    min="0"
                    max="600"
                    className="slider"
                    onChange={(e) => this.handlePriceChange(e)}
                  />
                  <h3>$: {filterPrice}</h3>
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
                          <span>{currentPage}</span>
                          <NumbersOfPage handleChangePage={this.handleChangePageClick} pages={pages} />
                        </div>
                        <div className="page_total"><span>of</span>{totalPage}</div>
                      </div>

                    </div>


                    <div className="product-grid">

                      <div className="row">
                        {/* productList */}
                        {
                          dataFetch ?
                            <ProductList
                              productList={productList}
                              onAddToCartClick={this.handleAddToCart}
                              onProductClick={this.handleProductClick}
                            />
                            : <p style={{ fontSize: '30px' }}>Đang lấy dữ liệu chờ xí</p>
                        }

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