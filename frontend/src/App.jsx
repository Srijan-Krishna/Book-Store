import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ViewBook from "./components/ViewBook";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Favourites from "./pages/favourites";
import OrderHistory from "./components/orderHistory";
import Settings from "./components/settings";

const App=()=>{
  const dispatch=useDispatch();
  const role=useSelector((state)=>{
     return state.auth.role;
  });

  useEffect(()=>{
    if(localStorage.getItem('id') && localStorage.getItem('token') && localStorage.getItem('role')){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem('role')));
    }
  },[]);

  return(
   <div>
   
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/all-books' element={<AllBooks/>}/>
    <Route path='/SignIn' element={<LogIn/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/profile' element={<Profile/>} >
      <Route index element={<Favourites/>}/>
      <Route path="/profile/settings" element={<Settings/>}/>
      <Route path="/profile/orderHistory" element={<OrderHistory/>} />
    </Route>
    <Route path='/view-book-details/:id' element={<ViewBook/>} />
    
    </Routes>
   <Footer/>
   
   </div>
  );
}

export default App;
