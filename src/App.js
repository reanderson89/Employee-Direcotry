import React from "react";
import Table from "./containers/Table/Table.jsx";

const App = () => {
  return (
    <div>
      <div className="container" >
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Employee Tracker</h1>
            <h5 className="text-center">A convenient way to search for employees</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            {/* Table container */}
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;







