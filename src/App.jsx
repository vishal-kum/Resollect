import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PortfolioTable from "./components/PortfolioTable";
import PortfolioTable1 from "./components/PortfolioTable1";

const App= () => {
  return (
    <div className="flex h-screen">
      
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-4 flex">
          <Sidebar/>
          <div className="p-12">
            <PortfolioTable/>
          <PortfolioTable1/>
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
