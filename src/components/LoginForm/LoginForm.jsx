import { useState } from 'react';
import { nanoid } from 'nanoid';

const LoginForm = () => {
  const [state, setState] = useState({ email: '', password: '' });

  console.log(state);

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const { email, password } = state;

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    setState(prevValue => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <form action="">
      <label htmlFor="">
        Email
        <input
          type="email"
          name="email"
          id={emailInputId}
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="">
        Password
        <input
          type="password"
          name="password"
          id={passwordInputId}
          value={password}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};

export default LoginForm;