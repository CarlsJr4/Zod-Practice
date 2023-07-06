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
