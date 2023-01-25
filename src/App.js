import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Teams from './components/teams/Teams';
import ProductCare from './components/productCare/ProductCare'
import Login from './components/login/Login'
import Register from './components/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Teams" element={<Teams />} />
        <Route exact path="/ProductCare" element={<ProductCare />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
