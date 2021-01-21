import { useEffect, useState } from 'react';
import Row from "../../components/Row/Row";
import API from "../../utils/API";

const Table = () => {
    const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.search()
      .then(res => {
          setEmployeeState(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {/* Row component */}
      {employeeState.map(emp => (
          <Row
            firstName={emp.name.first}
            lastName={emp.name.last}
            phone={emp.cell}
            email={emp.email}
            picture={emp.picture.thumbnail}
            key={emp.id.value}
          />
        ))}
  </tbody>
</table>
    );
};

export default Table;