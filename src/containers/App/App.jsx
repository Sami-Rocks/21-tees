import './App.scss';
import Header from './../../components/Header';
import LeftSideBar from '../../components/LeftSideBar';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {LeftSideBarContext, RightSideBarContext, ActiveCapsuleContext} from './../../helpers/contexts'
import { useState } from 'react';
import RightSideBar from '../../components/RightSideBar';
import ProductDetails from '../ProductDetails';
import Checkout from '../Checkout';
import CustomShirt from '../CustomShirt';
import AllShops from '../AllShops';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from '../../components/Footer';
import { firebaseConfig } from '../../helpers/firebase';
import Shop from '../Shop';

firebase.initializeApp(firebaseConfig)

function App() {

  const [leftSideBar, setLeftSideBar] = useState();
  const [rightSideBar, setRightSideBar] = useState();
  const [ activeCapsule, setActiveCapsule ] = useState('')

  return (
    <Router>
      <div className="App">
        <LeftSideBarContext.Provider value={{leftSideBar, setLeftSideBar}}>
          <RightSideBarContext.Provider value={{rightSideBar, setRightSideBar}}>
            <ActiveCapsuleContext.Provider value={{activeCapsule, setActiveCapsule}}>
              <Header />
              <LeftSideBar/>
              <RightSideBar />
              <Switch>
                <Route path="/product-details/:id">
                  <ProductDetails />
                </Route>
                <Route path="/custom-design">
                  <CustomShirt />
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/shop/:shopId">
                  <Shop />
                </Route>
                <Route path="/">
                  <AllShops />
                </Route>
              </Switch>
              <Footer />
            </ActiveCapsuleContext.Provider>
          </RightSideBarContext.Provider>
        </LeftSideBarContext.Provider>
      </div>
    </Router>
  );
}

export default App;
