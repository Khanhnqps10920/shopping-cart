import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeroBanner from './HeroBanner/HeroBanner';
import QuickCatetories from './QuickCategories/QuickCategories'
import NewArrival from './NewArrival/NewArrival';
import ShippingInformation from './ShippingInformation/ShippingInfomartion';
import DealOfTheWeek from './DealOfTheWeek/DealOfTheWeek';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <HeroBanner />
        <QuickCatetories />
        <NewArrival />
        <DealOfTheWeek />
        <ShippingInformation />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;