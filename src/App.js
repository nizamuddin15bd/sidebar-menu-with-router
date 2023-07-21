import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './talwind/talwind.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Comment from './pages/Comment';
import Analytics from './pages/Analytics';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div >
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/comment' element={<Comment />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/productList' element={<ProductList />}></Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
