// We need to make anything that isn't the first table row dependent on state

export default function TrackerTable() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
        <tr>
          <td>MILK</td>
          <td>$5.00</td>
          <td>Groceries</td>
          <td>
            <button>DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
