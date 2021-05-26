import './App.css';
import Header from './../../components/Header';
import Banner from './../../components/Banner';
import ProductList from './../ProductList/'
import LeftSideBar from '../../components/LeftSideBar';

import {LeftSideBarContext} from './../../helpers/SideBarContext.js'
import {RightSideBarContext} from './../../helpers/SideBarContext.js'
import { useState } from 'react';
import RightSideBar from '../../components/RightSideBar';
import ProductDetails from '../ProductDetails';
import Checkout from '../Checkout';

function App() {

  const [leftSideBar, setLeftSideBar] = useState();
  const [rightSideBar, setRightSideBar] = useState();

  return (
    <div className="App">
      <LeftSideBarContext.Provider value={{leftSideBar, setLeftSideBar}}>
        <RightSideBarContext.Provider value={{rightSideBar, setRightSideBar}}>
          <Header />
          <LeftSideBar/>
          <RightSideBar />
        </RightSideBarContext.Provider>
      </LeftSideBarContext.Provider>
      <Banner />
      <div className="container" >
        <Checkout />
      </div>
    </div>
  );
}

export default App;
