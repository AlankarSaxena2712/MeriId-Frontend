import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../components/user/UserHeader';
import UserNavbar from '../components/user/UserNavbar';
import AddUser from "./User/AddUser";
import Loginuser from './User/Loginuser';
import Showbooking from './User/Showbooking';
import UserInfo from './User/UserInfo';
import UserGuidelines from './User/UserGuidelines';

const Home = () => {
  // const {pathname} = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (pathname === "/user" || pathname === "/login") {
  //     navigate("/User/login");
  //   }

  //   if (pathname === "/user/login/" || pathname === "/User/Login") {
  //     navigate("/User/login");
  //   }

  //   if (pathname === "/user/guidelines/" || pathname === "/User/guidelines") {
  //     navigate("/user/guidelines/add");
  //   }

  //   if (pathname === "/user/operator/list/" || pathname === "/User/operator/list") {
  //     navigate("/User/operator/list");}
  //   }, [pathname, navigate])

  //   if (pathname === "/")



  return (
    <div className='flex flex-col h-screen bg-white'>
    <UserHeader />
    <Routes>
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/loginuser" element={<Loginuser />} />
      <Route path="/showbooking" element={<Showbooking />} />
      <Route path="/guidelines" element={<UserGuidelines />} />
      <Route path="/userinfo" element={<UserInfo />} />
      
    </Routes>
    <UserNavbar />
  </div>
  );
};

export default Home;
