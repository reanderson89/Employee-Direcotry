import { useEffect, useState } from 'react';
import Row from "../../components/Row/Row";
import API from "../../utils/API";
import "./Main.css";

// creating state hooks that can be used to render the page on change
const Main = () => {
    const [employeeState, setEmployeeState] = useState([]);
    const [search, setSearch] = useState("");

    // make an API call when the page loads
  useEffect(() => {
    API.search()
      .then(res => {
          setEmployeeState(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  
  // sorts the names from A-Z, if the first names are the same, it sorts by last name.
  const handleSortUpName = () => {
    const spreadEmployee = [...employeeState];
    const sortedEmployees = spreadEmployee.sort((a,b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last)? 1 : -1): -1)
    setEmployeeState(sortedEmployees);
  };

    // sorts the names from Z-A, if the first names are the same, it sorts by last name.
  const handleSortDownName = () => {
    const spreadEmployee = [...employeeState];
    const sortedEmployees = spreadEmployee.sort((a,b) => (b.name.first > a.name.first) ? 1 : (b.name.first > a.name.first) ? ((b.name.last > a.name.last) ?1 : -1): -1)
    setEmployeeState(sortedEmployees);
  };

  // filters the search results as the search value is typed
  const handleInputChange = event => {
    let value = event.target.value;
    setSearch(value);
  };

    return (
      <>
      <div style={{backgroundColor: "teal", color: "white"}} className="row">
      <div className="col-sm-4">
      </div>
        <div className="col-sm-4">
          <div className="input-group" >
      <input type="text" className="form-control mb-3 mt-3" name="search" value={search} onChange={handleInputChange} placeholder="Search"/>
      </div>
      <div className="col-sm-4">
      </div>
        </div>
      </div>
      <div className="row">
          <div className="col-sm">
        <table className="table table-hover">
  <thead className="text-center">
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">
        <span>
          <button onClick={handleSortUpName} >
            <i className="fas fa-angle-double-up">
              </i> 
          </button>
        </span> 
        <span> Name </span> 
        <span>
          <button onClick={handleSortDownName} >
             <i className="fas fa-angle-double-down">
               </i>
          </button>
        </span>
      </th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody className="text-center">
      {/* Row component: The .filter function is a part that enables the live filtering you see on the site, then the .map creates the rows of employees that get filtered. */}
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