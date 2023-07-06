import { useForm } from 'react-hook-form';
import ExpenseType from '../types/ExpenseType';

export default function TrackerForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ExpenseType>();

  const onSubmit = (data: ExpenseType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
