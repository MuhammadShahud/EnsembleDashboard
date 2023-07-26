// import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const WithNavbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo.firstTime ? <div></div> : <Navbar />}
      <Outlet />
    </>
  );
};

const WithoutNavbar = () => {
  return <Outlet />;
};

export default WithNavbar;
export { WithoutNavbar };
