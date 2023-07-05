import { useForm, SubmitHandler } from 'react-hook-form';

export default function FormHookForm() {
  // Task 2: Build a simple form using react hook form only
  // Task 3: Make a complex form using react hook form only

  // Pros: Easy to scale, Better typing, better error handling
  // Cons: Handling errors can become verbose
  interface User {
    name: string;
    age: string;
    number: string;
    email: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = data => console.log(data);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        {...register('name', { required: true, minLength: 4 })}
        type="text"
        id="name"
      />
      {errors.name?.type === 'required' && (
        <p className="formError">*Name is required</p>
      )}
      <label htmlFor="age">Age:</label>
      <input
        {...register('age', { required: true, min: 18, max: 99 })}
        type="text"
        id="age"
      />
      {errors.age?.type === 'required' && (
        <p className="formError">*Age is required</p>
      )}
      {errors.age?.type === 'min' && (
        <p className="formError">*Age must be between 18-99</p>
      )}
      <label htmlFor="number">Phone:</label>
      <input
        {...register('number', { required: true, minLength: 4 })}
        type="number"
        id="number"
      />
      {errors.number?.type === 'required' && (
        <p className="formError">*Number is required</p>
      )}
      <label htmlFor="email">Email address:</label>
      <input
        {...register('email', { required: true })}
        type="text"
        id="email"
      />
      {errors.email?.type === 'required' && (
        <p className="formError">*Email is required</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
