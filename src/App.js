import React from "react";
import Main from "./containers/Main/Main.jsx";

const App = () => {
  return (
    <div>
      <div className="container" >
        <div className="row">
          <div className="col text-center">
            <h1 className="text-center">Employee Directory</h1>
            <h5 className="text-center">A convenient way to search for co-workers</h5>
          </div>
        </div>
        <Main />         
      </div>
    </div>
  );
};

export default App;







