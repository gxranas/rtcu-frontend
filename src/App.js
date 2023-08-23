import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import { useState,useEffect } from 'react';
import Dashboard from './pages/manage-account-pages/Dashboard';
import Profile from './pages/manage-account-pages/Profile';
import UpdateName from './pages/manage-account-pages/UpdateName';
import UpdateEmail from './pages/manage-account-pages/UpdateEmail';
import UpdatePhone from './pages/manage-account-pages/UpdatePhone';
import UpdatePassword from './pages/manage-account-pages/UpdatePassword';
import UpdateGender from './pages/manage-account-pages/UpdateGender';
import UpdateBirthday from './pages/manage-account-pages/UpdateBirthday';
import Addresses from './pages/manage-account-pages/Addresses';
import Login from './pages/authentication/Login';
import MainPageHeader from './components/Header'
import Footer from './components/Footer';
import Signup from './pages/authentication/Signup';
import ResetPassword from './pages/authentication/ResetPassword';
import ErrorPage404 from './pages/ErrorPage404';
function App() {

  const [user,setUser] = useState(null)

useEffect(()=>{
  const getUser = () =>{
    fetch("http://localhost:3001/users/login/success",{
      method: 'GET',
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        
      },
    }).then((response)=>{
      if(response.status ===  200) return response.json();
      throw new Error("Authentication failed");
    }).then(resObject=>{
    setUser(resObject.user);
    }).catch(err=>{
      console.log(err);
    })
  }
  getUser();
}, [])

  return (
    <>
    <div className="App">
      <Router>
        
          <MainPageHeader/>
          <Routes>
            <Route path="*" element={<ErrorPage404/>} />
            <Route path="/" element={<Home user={user}/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="reset" element={<ResetPassword/>} />
            <Route path="manage-account" element={<Dashboard/>}>
              <Route path="profile" element={<Profile/>} />
              <Route path="profile/update/name" element={<UpdateName/>} />
              <Route path="profile/update/email" element={<UpdateEmail/>} />
              <Route path="profile/update/phone" element={<UpdatePhone/>} />
              <Route path="profile/update/password" element={<UpdatePassword/>} />
              <Route path="profile/update/gender" element={<UpdateGender/>} />
              <Route path="profile/update/birthday" element={<UpdateBirthday/>} />
              <Route path="profile/addresses" element={<Addresses/>} />
            </Route>
          </Routes>
          <Footer/>
      </Router>

    </div>
    </>
  );
}

export default App;
