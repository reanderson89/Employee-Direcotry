import { useEffect, useState } from 'react';
import Row from "../../components/Row/Row";
import API from "../../utils/API";
import "./Table.css";

const Main = () => {
    const [employeeState, setEmployeeState] = useState([]);
    const [search, setSearch] = useState("");

  useEffect(() => {
    API.search()
      .then(res => {
          setEmployeeState(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  // const handleNameSort = () => {
  //   const spreadEmployee = [...employeeState];
  //   const sortedEmployees = spreadEmployee.sort((a,b) => (a.name.first > b.name.first) ? 1 :(a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? 1 : -1) : -1 );
  //   console.log(sortedEmployees);
  //   setEmployeeState(sortedEmployees);
  // };

  // const handleSortUp = () => {
  //   const spreadEmployee = [...employeeState];
  //   const sortedEmployees = spreadEmployee.sort((a,b) => {
  //     if (a.name.first > b.name.first){
  //       return 1;
  //     } else if (b.name.first > a.name.first){
  //       return -1;
  //     }
  //   });
  //   setEmployeeState(sortedEmployees);
  // };

  // const handleSortDown = () => {
  //   const spreadEmployee = [...employeeState];
  //   const sortedEmployees = spreadEmployee.sort((a,b) => {
  //     if (a.name.first > b.name.first){
  //       return -1;
  //     } else if (b.name.first > a.name.first){
  //       return 1;
  //     }
  //   });
  //   setEmployeeState(sortedEmployees);
  // };
  
  const handleSortUpName = (event) => {
    const spreadEmployee = [...employeeState];
    const sortedEmployees = spreadEmployee.sort((a,b) => (a.name.first > b.name.first ? 1 : -1))
    setEmployeeState(sortedEmployees);
  };

  const handleSortDownName = () => {
    const spreadEmployee = [...employeeState];
    const sortedEmployees = spreadEmployee.sort((a,b) => (b.name.first > a.name.first ? 1 : -1))
    setEmployeeState(sortedEmployees);
  };

  const handleInputChange = event => {
    let value = event.target.value;
    setSearch(value);
  };

    return (
      <>
      <div className="row">
      <div className="col-sm-4">
      </div>
        <div className="col-sm-4">
          <div className="input-group" >
      <input type="text" className="form-control" name="search" value={search} onChange={handleInputChange} />
      </div>
      <div className="col-sm-4">
      </div>
        </div>
      </div>
      <div className="row">
          <div className="col-sm">
        <table className="table table-hover">
  <thead className="text-center" >
    <tr>
      <th scope="col">Picture</th>
      <th scope="col"><span><button onClick={handleSortUpName} ><i className="fas fa-angle-double-up"></i> </button></span> Name <span><button onClick={handleSortDownName} > <i className="fas fa-angle-double-down"></i></button></span></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody className="text-center">
      {/* Row component */}
      {employeeState
      .filter(
       emp => emp.name.first.toLowerCase().includes(search.toLowerCase()) ||
       emp.name.last.toLowerCase().includes(search.toLowerCase()) ||
       emp.cell.includes(search) ||
       emp.email.toLowerCase().includes(search.toLowerCase()))
       .map(emp => (
          <Row
            firstName={emp.name.first}
            lastName={emp.name.last}
            phone={emp.cell}
            email={emp.email}
            picture={emp.picture.thumbnail}
            key={emp.login.uuid}
          />
        ))}
  </tbody>
</table>
</div>
        </div>
        </>
    );
};

export default Main;