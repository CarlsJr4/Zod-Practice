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
  const [expense, updateExpenses] = useState<ExpenseTableType[]>(
    [] as ExpenseTableType[]
  );

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TrackerForm />
      </div>
      <br />
      <TrackerTable />
    </>
  );
}

export default App;
