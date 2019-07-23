import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NewArrival.css';
import ProductList from '../ProductList/ProductList';
import Categories from '../Categories/Categories';

class NewArrival extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ctg: null,
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
    }

  }

  handleCategoriesClick = (category) => {

    this.setState((prevState) => {

      // const productList = [...prevState.productList].filter((p) => p.id === category.id);

      return { ctg: category };
    })

  }

  render() {

    const { productList, categories, ctg } = this.state;

    let testList;

    if (ctg === null) {
      testList = productList;
    }
    else {
      testList = productList.filter((p) => {
        return p.categoryId === ctg.id;
      })
    }

    return (
      <div>

        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <Categories onCategoriesClick={this.handleCategoriesClick} categories={categories} />
            <ProductList productList={testList} />

          </div>
        </div>
      </div>

    );
  }
}

NewArrival.propTypes = {

};

export default NewArrival;