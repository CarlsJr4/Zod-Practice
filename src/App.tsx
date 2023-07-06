import { useState } from 'react';
import './App.css';
import TrackerForm from './components/TrackerForm';
import TrackerTable from './components/TrackerTable';
import ExpenseTableType from './types/ExpenseTableType';

// NEW TASK:
// Build an expense tracker
// 3 fields:
// Description - string
// Amount - number
// Category - Groceries, utilities, entertainment

// Items get submitted to a table:
// Description | Amount | Category  |        |
// MILK        | $5.00  | Groceries | DELETE |

// Make the table filterable by category - All, groceries, utilities, entertainment
// Make the DELETE button delete items

function App() {
  // We need to type expenses - What will the data structure look like?
  // Will it be an array of objects?
  // We probably need an ID to be able to update these objects
  // Use the uniqid library to generate IDs
  // [{id: '', description: '', amount: '', category: ''}]
  // How can we have React listen for this type?
  // Look for an array of an interface
  const [expenses, updateExpenses] = useState<ExpenseTableType[]>(
    // [] as ExpenseTableType[]
    [
      {
        id: '3',
        description: '3',
        amount: 3,
        category: '3',
      },
      {
        id: '4',
        description: '3',
        amount: 3,
        category: '3',
      },
    ]
  );

  // For this function, we need to grab form data and append or remove it from the array
  // const handleUpdateExpenses = () => {
  //   updateExpenses([
  //     {
  //       id: '3',
  //       description: '3',
  //       amount: 3,
  //       category: '3',
  //     },
  //   ]);
  // };

  const handleDelete = (id: string) => {
    let expensesState: ExpenseTableType[] = [...expenses];
    expensesState = expensesState.filter(expense => expense.id !== id);
    updateExpenses(expensesState);
    return;
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TrackerForm />
      </div>
      <br />
      <TrackerTable expenses={expenses} handleDelete={handleDelete} />
    </>
  );
}

export default App;
