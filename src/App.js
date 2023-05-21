import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Shop from './pages/Shop/shop';
import Cart from './pages/Cart/cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;