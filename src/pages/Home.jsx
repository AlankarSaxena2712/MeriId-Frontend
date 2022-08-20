import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../components/user/UserHeader';
import UserNavbar from '../components/user/UserNavbar';

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
    </Routes>
    <UserNavbar />
  </div>
  );
};

export default Home;
