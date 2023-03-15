import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import Button from 'shared/components/Button/Button';

import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';

// const LoginForm = () => {
//   const [state, setState] = useState({ email: '', password: '' });

//   console.log(state);

//   const emailInputId = nanoid();
//   const passwordInputId = nanoid();

//   const { email, password } = state;

//   const handleInputChange = event => {
//     const { name, value } = event.currentTarget;

//     setState(prevValue => {
//       return { ...prevValue, [name]: value };
//     });
//   };

//   return (
//     <form action="">
//       <label htmlFor="">
//         Email
//         <input
//           type="email"
//           name="email"
//           id={emailInputId}
//           value={email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label htmlFor="">
//         Password
//         <input
//           type="password"
//           name="password"
//           id={passwordInputId}
//           value={password}
//           onChange={handleInputChange}
//         />
//       </label>
//     </form>
//   );
// };

// export default LoginForm;
