import { ChangeEvent, FormEvent, useState } from 'react';

export default function FormReact() {
  // Task 1: Build a simple form using React + TS only
  // Include 3 fields and validation

  // Initial forms usage with no libraries
  // Controlled components with manual validation
  // Need to monitor input fields using state, onchange, and value
  // Need to implement validation using state and vanilla JS functions
  // Pros: simple to set up, no dependencies
  // Cons: Becomes ugly and error prone

  // NOTE: In one of my inputs, I accidentally set the input ID to phone
  // How do we make typeScript check for this so I can't add a phone property to the inputValues state?

  const [inputValues, setInputValues] = useState({
    name: '',
    number: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    nameError: false,
    phoneError: false,
    emailError: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Do form validation here
    e.preventDefault();

    let errors = {
      nameError: false,
      phoneError: false,
      emailError: false,
    };

    if (inputValues.name.length < 1) {
      errors = { ...errors, nameError: true };
    }
    if (inputValues.number.length < 1) {
      errors = { ...errors, phoneError: true };
    }
    if (inputValues.email.length < 1) {
      errors = { ...errors, emailError: true };
    }

    // State updates may be updated asynchronously.
    // Don't rely on previous state to update the next state
    setErrors(errors);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        value={inputValues.name}
        onChange={handleChange}
        type="text"
        id="name"
      />
      {errors.nameError && <p className="formError">*Name is required</p>}
      <label htmlFor="number">Phone:</label>
      <input
        value={inputValues.number}
        onChange={handleChange}
        type="tel"
        id="number"
      />
      {errors.phoneError && (
        <p className="formError">*Phone number is required</p>
      )}
      <label htmlFor="email">Email address:</label>
      <input
        value={inputValues.email}
        onChange={handleChange}
        type="text"
        id="email"
      />
      {errors.emailError && <p className="formError">*Email is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
