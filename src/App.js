
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Listarticles from './components/articles/Listarticles';
import NavScroll from './components/NavScroll';
import Cart from './components/articles/Cart';
import StripePayement from './components/articles/StripePayement';
import CheckoutSuccess from './components/articles/CheckoutSuccess';
import PdfCart from './components/articles/PdfCart';
import ProductsAppAdmin from './admin/components/articles/ProductAppAdmin';

import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
    <Router>
      <NavScroll/>
      <Routes>
        <Route path='/articles' element={<Listarticles/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pay/:total' element={<StripePayement/>}/>
        <Route path='/ckeckout' element={<CheckoutSuccess/>}/>
        <Route path='/pdfcart' element={<PdfCart/>}/>
        <Route path='/arttable' element={<ProductsAppAdmin/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
