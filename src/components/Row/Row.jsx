
const Row = ({firstName, lastName, phone, email, picture}) => {
    return (
        <tr>
      <th scope="row">{picture}</th>
      <td>{firstName} {lastName}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
    );
};

export default Row;