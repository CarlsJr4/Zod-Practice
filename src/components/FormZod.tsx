import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function FormZod() {
  // Task 4: Refactor the form to be less verbose using Zod

  // Pros: MUCH less verbose than react hook form alone. Very powerful schema based validation.
  // Cons: You need to know how to use both Zod and React Hook Form effectively to get the most out of this. Brain hurty. Dependencies.

  const UserSchema = z.object({
    name: z.string().min(4),
    age: z.coerce.number().gte(18),
    number: z.string().min(4),
    email: z.string().email(),
  });

  type User = z.infer<typeof UserSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // If this were a real app, we would send this data to the server for validation.
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input {...register('name')} type="text" id="name" />
      {errors.name && <p className="formError">{errors.name?.message}</p>}
      <label htmlFor="age">Age:</label>
      <input {...register('age')} type="text" id="age" />
      {errors.age && <p className="formError">{errors.age?.message}</p>}
      <label htmlFor="number">Phone:</label>
      <input {...register('number')} type="number" id="number" />
      {errors.number && <p className="formError">{errors.number?.message}</p>}
      <label htmlFor="email">Email address:</label>
      <input {...register('email')} type="text" id="email" />
      {errors.email && <p className="formError">{errors.email?.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
