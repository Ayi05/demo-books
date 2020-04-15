import React from 'react';
import Navbar from './home/1_header/navbar';
// import Topbar from './home/1_header/topbar';
import Display from './home/2_main/display';

const Home = (props) => {
  return (
    <div style={{ fontFamily: "Cambria" }}>
      {/* <Topbar></Topbar> */}
      <Navbar></Navbar>
      <div className="container mt-5">
        <Display></Display>
      </div>
    </div>
  );
};

export default Home;
