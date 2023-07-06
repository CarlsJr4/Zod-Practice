import { ChangeEvent, useState } from 'react';
import './App.css';
import TrackerForm from './components/TrackerForm';
import TrackerTable from './components/TrackerTable';
import ExpenseTableType from './types/ExpenseTableType';
import TrackerFilter from './components/TrackerFilter';

function App() {
  const [expenses, updateExpenses] = useState<ExpenseTableType[]>(
    [] as ExpenseTableType[]
  );

  const [filter, updateFilter] = useState('');

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

  const filterExpenses = (e: ChangeEvent<HTMLSelectElement>) => {
    updateFilter(e.target.value);
    return;
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TrackerForm onSubmit={onSubmit} />
      </div>
      <br />
      <TrackerFilter onChange={filterExpenses} />
      <br />
      <TrackerTable
        filter={filter}
        expenses={expenses}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
