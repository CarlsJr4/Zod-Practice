import { useForm } from 'react-hook-form';
import ExpenseType from '../types/ExpenseType';
import ExpenseTableType from '../types/ExpenseTableType';
import uniqid from 'uniqid';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function TrackerForm({
  onSubmit,
}: {
  onSubmit: (data: ExpenseTableType) => void;
}) {
  const ExpenseSchema = z.object({
    description: z
      .string()
      .min(4, { message: 'Description must be at least 4 characters long.' }),
    amount: z.coerce.number().gte(1, { message: 'Amount must be 1 or more.' }),
    category: z.string().min(1, { message: 'Please select a category' }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseType>({ resolver: zodResolver(ExpenseSchema) });

  console.log(errors);

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
      {errors.description && (
        <p className="formError">{errors.description.message}</p>
      )}
      <label htmlFor="amount">Amount:</label>
      <input {...register('amount')} type="number" name="amount" id="amount" />
      {errors.amount && <p className="formError">{errors.amount.message}</p>}
      <label htmlFor="category">Category:</label>
      <select {...register('category')} name="category" id="category">
        <option value=""></option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
      {errors.category && (
        <p className="formError">{errors.category.message}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
