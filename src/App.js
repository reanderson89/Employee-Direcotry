import React, { useEffect, useState } from "react";
import 'fontsource-roboto';
// import BasicTable from "./components/Table/Table.jsx";
import Cards from "./components/Card/Cards";
import API from "./utils/API";

const getEmployees = () => {
    API.search()
      .then(res => {
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  };
  
  getEmployees();

const App = () => {

  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.search()
      .then(res => {
        console.log(res);
          setEmployeeState(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  // const getEmployees = () => {
  //   API.search()
  //     .then(res => {
  //         setEmployeeState([res.data.results]);
  //     })
  //     .catch(err => console.log(err));
  // };
  
  // getEmployees();

  return (
    <div>
      {employeeState.map(emp => (
          <Cards
            firstName={emp.name.first}
            lastName={emp.name.last}
            cell={emp.cell}
            email={emp.email}
            picture={emp.picture.large}
          />
        ))}
    </div>
  );
};

export default App;







