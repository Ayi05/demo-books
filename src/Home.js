import React from 'react';
import Navbar from './home/1_header/navbar';
// import Topbar from './home/1_header/topbar';
// import Display from './home/2_main/display';
import MainContent from './home/2_main/mainContent';

const Home = (props) => {
  return (
    <div style={{ fontFamily: "Cambria" }}>
      {/* <Topbar></Topbar> */}
      <Navbar></Navbar>
      <div className="container mt-5">
        {/* <Display></Display> */}
        <MainContent></MainContent>
      </div>
    </div>
  );
};

export default Home;
