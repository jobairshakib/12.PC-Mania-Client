import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Error404 from './Components/Error404';
import Footer from './Components/Shared/Footer';
import Register from './Components/Login/Register';
import Portfolio from './Components/Portfolio/Portfolio';
import Purchase from './Components/Purchase';
import AllProducts from './Components/AllProducts';
import RequireAuth from './Components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './Components/Dashboard/MyOrder';
import AddAReview from './Components/AddAReview';
import Users from './Components/Dashboard/Users';
import RequireAdmin from './Components/RequireAdmin';
import Products from './Components/Dashboard/Products';
import AddProduct from './Components/Dashboard/AddProduct';
import Orders from './Components/Dashboard/Orders';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>  
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<></>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='products' element={<RequireAdmin><Products></Products></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='orders' element={<RequireAdmin><Orders></Orders></RequireAdmin>}></Route>
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
