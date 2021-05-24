import './App.css';
import Header from './../../components/Header';
import Banner from './../../components/Banner';
import ProductItem from './../../components/ProductItem/';
import ProductList from './../ProductList/'

function App() {
  return (
    <div className="App">
      <Header />
        <Banner />
      <div className="container" >
        <ProductList />
      </div>
    </div>
  );
}

export default App;
