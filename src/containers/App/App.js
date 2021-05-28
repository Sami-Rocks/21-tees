import './App.scss';
import Header from './../../components/Header';
import LeftSideBar from '../../components/LeftSideBar';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {LeftSideBarContext} from './../../helpers/SideBarContext.js'
import {RightSideBarContext} from './../../helpers/SideBarContext.js'
import { useState } from 'react';
import RightSideBar from '../../components/RightSideBar';
import ProductDetails from '../ProductDetails';
import Checkout from '../Checkout';
import Shop from '../Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from '../../components/Footer';
import { firebaseConfig } from '../../helpers/firebase';

firebase.initializeApp(firebaseConfig)

function App() {

  const [leftSideBar, setLeftSideBar] = useState();
  const [rightSideBar, setRightSideBar] = useState();


  return (
    <Router>
      <div className="App">
        <LeftSideBarContext.Provider value={{leftSideBar, setLeftSideBar}}>
          <RightSideBarContext.Provider value={{rightSideBar, setRightSideBar}}>
            <Header />
            <LeftSideBar/>
            <RightSideBar />
            <Switch>
              <Route path="/product-details/:id">
                <ProductDetails />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/">
                <Shop />
              </Route>
            </Switch>
            <Footer />
          </RightSideBarContext.Provider>
        </LeftSideBarContext.Provider>
      </div>
    </Router>
  );
}

export default App;
