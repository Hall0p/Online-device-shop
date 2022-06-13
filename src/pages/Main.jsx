import React from 'react';
import Sidebar from "../components/Sidebar";
import Devices from "../components/Devices";

const Main = () => {

  return (
      <main className="main">
        <Sidebar />
        <div className="content">
          <Devices />
        </div>
      </main>
  );
};

export default Main;