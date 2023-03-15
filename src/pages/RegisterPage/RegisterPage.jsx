import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'Redux/auth/auth-operations';
import { isUserLogin } from 'Redux/auth/auth-selectors';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
