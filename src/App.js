import React from 'react';
import './App.css';
import { Categories, Checkout, Contact, Dashboard, PageNotFound, Product, ShoppingCart, Login, Register} from './pages';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
// import './assets/sass/style.scss';
import './assets/css/bootstrap.min.css';
// import './assets/css/jquery-ui.min.css';
import './assets/css/elegant-icons.css';
import './assets/css/style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import MatchCatching from './MatchCatching';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect from="/index" to="/" />
        <Route path="/categories" component={Categories} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route render={PageNotFound} />
      </Switch>
    </Router>
  );
}
// const routes = [
//   {
//     paths: [],
//     isExact: true,

//   }
// ];

export default App;
