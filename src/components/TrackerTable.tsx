import ExpenseTableType from '../types/ExpenseTableType';

export default function TrackerTable({
  expenses,
  handleDelete,
  filter,
}: {
  filter: string;
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
        {expenses
          .filter(expense => {
            if (filter.length > 0) {
              return expense.category === filter;
            } else {
              return expense.category.length > 0;
            }
          })
          .map(({ amount, category, description, id }) => {
            return (
              <tr key={id}>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{category}</td>
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
