import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/header'
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';

function App() {
  return (
    <div className="App">
      <Router>  
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetail}/>
          <Route>Halaman tidak tersedia</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
