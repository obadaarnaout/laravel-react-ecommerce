import React, { Component, Fragment } from 'react';
import {
  Router,
  Routes,
  Route
} from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import axios from 'axios'
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import AppContext from '../components/AppContext';

export class AppRoute extends Component {
  constructor(props) {
    super(props);
    let loader = '<div class="ph-item"><div class="ph-col-12"><div class="ph-picture"></div><div class="ph-row"><div class="ph-col-6 big"></div><div class="ph-col-4 empty big"></div><div class="ph-col-2 big"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div><div class="ph-col-6"></div><div class="ph-col-6 empty"></div><div class="ph-col-12"></div></div></div></div>';
    this.state = {
      site_data:{
        about_us: loader,
        purchase: loader,
        privacy: loader,
        refund: loader,
        google_play: '',
        app_store: '',
        instagram: '',
        facebook: '',
        twitter: ''
      },
      categories:[],
      sliders:[],
      notifications:[]
      
    };
  }
  componentDidMount() {
    let self = this;
    axios.get('/get_config')
    .then(function (response) {
      self.setState({site_data:response.data.data});
    })
    .catch(function (error) {
    });

    axios.get('/get_categories')
    .then(function (response) {
      console.log(response.data.data)
    self.setState({categories:response.data.data});
    })
    .catch(function (error) {
    });

    axios.get('/get_sliders')
    .then(function (response) {
      console.log(response.data.data)
    self.setState({sliders:response.data.data});
    })
    .catch(function (error) {
    });

    axios.get('/get_notifications')
    .then(function (response) {
      console.log(response.data.data)
    self.setState({notifications:response.data.data});
    })
    .catch(function (error) {
    });
  }
  
  render() {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    return (
      <AppContext.Provider value={this.state}>
        <Routes>
          <Route exact path="/" element={<Home categories={this.state.categories} sliders={this.state.sliders}/>}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/contact" element={<ContactPage categories={this.state.categories}/>}></Route>
          <Route exact path="/about" element={<AboutPage about_us={this.state.site_data.about_us} categories={this.state.categories}/>}></Route>
          <Route exact path="/purchase" element={<PurchasePage purchase={this.state.site_data.purchase} categories={this.state.categories}/>}></Route>
          <Route exact path="/privacy" element={<PrivacyPage privacy={this.state.site_data.privacy} categories={this.state.categories}/>}></Route>
          <Route exact path="/refund" element={<RefundPage refund={this.state.site_data.refund} categories={this.state.categories}/>}></Route>
          <Route exact path="/product/:id" element={<ProductDetailsPage categories={this.state.categories}/>}></Route>
          <Route exact path="/notification" element={<NotificationPage categories={this.state.categories}/>}></Route>
          <Route exact path="/favourite" element={<FavouritePage categories={this.state.categories}/>}></Route>
          <Route exact path="/cart" element={<CartPage />}></Route>
          <Route exact path="/productcategory/:category" element={<ProductCategoryPage categories={this.state.categories}/>}></Route>
          <Route exact path="/subproductcategory/:subcategory" element={<ProductCategoryPage categories={this.state.categories}/>}></Route>
        </Routes>
      </AppContext.Provider>
    )
  }
}

export default AppRoute
