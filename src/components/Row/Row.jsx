// deconstructed the props object and called only what was needed. This is where all of the employees individual information will get past to as the rows are created.
const Row = ({firstName, lastName, phone, email, picture}) => {
    return (
        <tr>
      <th scope="row">
      <img alt="Employee Head-shot" src={picture} />
      </th>
      <td>{firstName} {lastName}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
    );
};

export default Row;