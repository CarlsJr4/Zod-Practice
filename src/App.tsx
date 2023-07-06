import { useState } from 'react';
import './App.css';
import TrackerForm from './components/TrackerForm';
import TrackerTable from './components/TrackerTable';
import ExpenseTableType from './types/ExpenseTableType';

// NEW TASK:
// Make the table filterable by category - All, groceries, utilities, entertainment

function App() {
  const [expenses, updateExpenses] = useState<ExpenseTableType[]>(
    [] as ExpenseTableType[]
  );

  const handleDelete = (id: string) => {
    let expensesState = [...expenses];
    expensesState = expensesState.filter(expense => expense.id !== id);
    updateExpenses(expensesState);
    return;
  };

  const onSubmit = (data: ExpenseTableType) => {
    const expensesState = [...expenses];
    expensesState.push(data);
    updateExpenses(expensesState);
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TrackerForm onSubmit={onSubmit} />
      </div>
      <br />
      <TrackerTable expenses={expenses} handleDelete={handleDelete} />
    </>
  );
}

export default App;
