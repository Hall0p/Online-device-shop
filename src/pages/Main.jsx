import React from 'react';
import Sidebar from "../components/Sidebar";
import Brands from "../components/Brands";
import Devices from "../components/Devices";

const Main = () => {

  return (
      <main className="main">
        <Sidebar />
        <div className="content">
          <Brands />
          <Devices />
        </div>
      </main>
  );
};

export default Main;