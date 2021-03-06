import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';
import Notfound from './components/Pages/Notfound/Notfound';
import ProductDeatail from './components/ProductDetails/ProductDeatail';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageProducts from './components/Pages/ManageProducts';
import MyItems from './components/Pages/MyItems';
import AddItems from './components/Pages/AddItems';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/productdetails/:details' element={
          <RequireAuth>
            <ProductDeatail />
          </RequireAuth>
        } />
        <Route path='/manage-products' element={
          <RequireAuth>
            <ManageProducts />
          </RequireAuth>
        } />

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />

        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } />

        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
