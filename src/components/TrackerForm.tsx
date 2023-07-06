import { useForm } from 'react-hook-form';
import ExpenseType from '../types/ExpenseType';
import ExpenseTableType from '../types/ExpenseTableType';
import uniqid from 'uniqid';

export default function TrackerForm({
  onSubmit,
}: {
  onSubmit: (data: ExpenseTableType) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<ExpenseType>();

  return (
    <form
      onSubmit={handleSubmit(data => {
        const dataWithId = { ...data, id: uniqid() };
        onSubmit(dataWithId);
        reset();
      })}
    >
      <label htmlFor="description">Description:</label>
      <input
        {...register('description')}
        type="text"
        name="description"
        id="description"
      />
      <label htmlFor="amount">Amount:</label>
      <input {...register('amount')} type="number" name="amount" id="amount" />
      <label htmlFor="category">Category:</label>
      <select {...register('category')} name="category" id="category">
        <option value=""></option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
