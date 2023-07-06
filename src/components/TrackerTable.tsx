import ExpenseTableType from '../types/ExpenseTableType';

export default function TrackerTable({
  expenses,
  handleDelete,
}: {
  expenses: ExpenseTableType[];
  handleDelete: (id: string) => void;
}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
        {expenses.map(({ amount, category, description, id }) => {
          return (
            <tr key={id}>
              <td>{amount}</td>
              <td>{category}</td>
              <td>{description}</td>
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
