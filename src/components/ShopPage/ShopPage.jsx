import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Shop.scss';
import ProductList from '../HomePage/ProductList/ProductList';

class ShopPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          "id": "5bcbf511696b664906832519",
          "name": "Winter Coat from France",
          "image": "http://api.demo.nordiccoder.com/images/product_1.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_1.png",
          "shortDescription": "product 1",
          "categoryId": "5b822e7f9c300309b7e9befc",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251a",
          "name": "Italy Bag",
          "image": "http://api.demo.nordiccoder.com/images/product_2.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_2.png",
          "shortDescription": "product 2",
          "categoryId": "5b822e919c300309b7e9bf0e",
          "salePrice": 610,
          "originalPrice": 610,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_2_1.png",
            "http://api.demo.nordiccoder.com/images/product_2_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_2_1.png",
            "http://api.demo.nordiccoder.com/images/product_2_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251b",
          "name": "Coat from France",
          "image": "http://api.demo.nordiccoder.com/images/product_3.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_3.png",
          "shortDescription": "product 3",
          "categoryId": "5b822ea99c300309b7e9bf13",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_3_1.png",
            "http://api.demo.nordiccoder.com/images/product_3_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_3_1.png",
            "http://api.demo.nordiccoder.com/images/product_3_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251c",
          "name": "Travel Bag from German",
          "image": "http://api.demo.nordiccoder.com/images/product_4.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_4.png",
          "shortDescription": "product 4",
          "categoryId": "5b822e919c300309b7e9bf0e",
          "salePrice": 610,
          "originalPrice": 610,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_4_1.png",
            "http://api.demo.nordiccoder.com/images/product_4_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_4_1.png",
            "http://api.demo.nordiccoder.com/images/product_4_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251d",
          "name": "Modern Shoe from Japan",
          "image": "http://api.demo.nordiccoder.com/images/product_5.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_5.png",
          "shortDescription": "product 5",
          "categoryId": "5b822e7f9c300309b7e9befc",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_5_1.png",
            "http://api.demo.nordiccoder.com/images/product_5_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_5_1.png",
            "http://api.demo.nordiccoder.com/images/product_5_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251e",
          "name": "Italy Glasses",
          "image": "http://api.demo.nordiccoder.com/images/product_6.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_6.png",
          "shortDescription": "product 6",
          "categoryId": "5b822e919c300309b7e9bf0e",
          "salePrice": 610,
          "originalPrice": 610,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_6_1.png",
            "http://api.demo.nordiccoder.com/images/product_6_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_6_1.png",
            "http://api.demo.nordiccoder.com/images/product_6_2.png"
          ]
        },
        {
          "id": "5bcbf511696b66490683251f",
          "name": "France Coat",
          "image": "http://api.demo.nordiccoder.com/images/product_7.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_7.png",
          "shortDescription": "product 7",
          "categoryId": "5b822ea99c300309b7e9bf13",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_7_1.png",
            "http://api.demo.nordiccoder.com/images/product_7_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_7_1.png",
            "http://api.demo.nordiccoder.com/images/product_7_2.png"
          ]
        },
        {
          "id": "5bcbf511696b664906832520",
          "name": "Wool Pocket",
          "image": "http://api.demo.nordiccoder.com/images/product_8.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_8.png",
          "shortDescription": "product 8",
          "categoryId": "5b822ea99c300309b7e9bf13",
          "salePrice": 610,
          "originalPrice": 610,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_8_1.png",
            "http://api.demo.nordiccoder.com/images/product_8_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_8_1.png",
            "http://api.demo.nordiccoder.com/images/product_8_2.png"
          ]
        },
        {
          "id": "5bcbf511696b664906832521",
          "name": "Winter Coat from France",
          "image": "http://api.demo.nordiccoder.com/images/product_1.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_1.png",
          "shortDescription": "product 1",
          "categoryId": "5b822e7f9c300309b7e9befc",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ]
        },
        {
          "id": "5bcbf511696b664906832521",
          "name": "Winter Coat from France",
          "image": "http://api.demo.nordiccoder.com/images/product_1.png",
          "thumbnail": "http://api.demo.nordiccoder.com/images/product_1.png",
          "shortDescription": "product 1",
          "categoryId": "5b822e7f9c300309b7e9befc",
          "salePrice": 520,
          "originalPrice": 590,
          "images": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ],
          "thumbnails": [
            "http://api.demo.nordiccoder.com/images/product_1_1.png",
            "http://api.demo.nordiccoder.com/images/product_1_2.png"
          ]
        },
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
      plist: null
    };
  };

  handlePriceChange = (e) => {
    this.setState({
      filterPrice: e.target.value
    })
  };

  handleFilter = (e) => {
    this.setState((prevState) => {
      let plist = prevState.plist;
      if (plist === null || plist !== prevState.filterPrice) {
        plist = prevState.filterPrice;
      }
      // else {
      //   plist = null;
      // }
      if (prevState.filterPrice === '') {
        plist = null;
      }
      return {
        plist
      };
    })
  }

  render() {

    let { productList, filterPrice, plist } = this.state;
    // console.log(filterPrice);
    // let filterProduct = productList.filter(product => {
    //   console.log(product.salePrice.toString());
    //   return product.salePrice.toString().indexOf(this.state.filterPrice) !== -1;
    // });
    console.log(plist, filterPrice);
    console.log(productList);
    let newList;
    if (plist === null) {
      newList = productList;
    }
    else {
      newList = productList.filter((p) => {
        return p.salePrice.toString() === plist;
      });
    }

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
                <ul className="sidebar_categories">
                  <li><a href="#">Men</a></li>
                  <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Collection</a></li>
                  <li><a href="categories.html">shop</a></li>
                </ul>
              </div>

              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Filter by Price</h5>
                </div>
                <p>
                  <input type="text" value={filterPrice} onChange={this.handlePriceChange} id="amount" />
                </p>
                <div id="slider-range"></div>
                <div className="filter_button" onClick={this.handleFilter}><span>filter</span></div>
              </div>

            </div>


            <div className="main_content">


              <div className="products_iso">
                <div className="row">
                  <div className="col">


                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">Default Sorting</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_type">
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">6</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn"><span>6</span></li>
                            <li className="num_sorting_btn"><span>12</span></li>
                            <li className="num_sorting_btn"><span>24</span></li>
                          </ul>
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
                        <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                      </div>

                    </div>


                    <div className="product-grid">

                      <div className="row">
                        <ProductList productList={newList} />
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

};

export default ShopPage;