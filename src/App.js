import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import './App.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import ShopPage from './components/ShopPage/ShopPage';
import PromotionPage from './components/PromotionPage/PromotionPage';
import BlogPage from './components/BlogPage/BlogPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/promotion">Promotion</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </Header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/promotion" component={PromotionPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
