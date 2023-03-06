import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Home from './Pages/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase'

function App() {
  return (
    <Router>
      <NavBar/>
      <FloatingCart/>
      <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route exact path='/produits' element = {<Products/>} />
        <Route exact path='/produits/:id' element = {<ProductShowcase/>} />
        <Route exact path='/contact' element = {<Contact/>} />
        <Route exact path='/shoppingCart' element = {<ShoppingCart/>} />
      </Routes>          
    </Router>   
  );
}

export default App;
