import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { directive } from '@babel/types';
import ShopPage from './container/ShopPage/ShopPage';
import HomePage from './container/HomePage/HomePage';
import ProductGetAPI from './container/ProductPage/ProductGetAPI/ProductGetAPI';
import ContactPage from './container/ContactPage/ContactPage';
import CartPage from './container/CartPage/CartPage';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import BlogPage from './container/BlogPage/BlogPage';
import PromotionPage from './container/PromotionPage/PromotionPage';

const Routes = ({ match }) => {
  return (
    <div>
      <Header>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/promotion">Promotion</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </Header>

      <Switch>
        <Route path={match.url} exact component={HomePage} />
        <Route path={`${match.url}shop`} exact component={ShopPage} />
        <Route path={`${match.url}shop/:productId`} component={ProductGetAPI} />
        <Route path={`${match.url}promotion`} component={PromotionPage} />
        <Route path={`${match.url}blog`} component={BlogPage} />
        <Route path={`${match.url}contact`} component={ContactPage} />
        <Route path={`${match.url}cart`} component={CartPage} />
      </Switch>

      <Footer />
    </div>
  )
}

export default Routes;