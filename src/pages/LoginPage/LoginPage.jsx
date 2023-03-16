import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';

import { login } from 'Redux/auth/auth-operations';
// import { isUserLogin } from 'Redux/auth/auth-selectors';

import LoginForm from 'components/LoginForm/LoginForm';

import css from './LoginPage.module.css';

const LoginPage = () => {
  // const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

// const LoginPage = () => {
//   return <LoginForm />;
// };

// export default LoginPage;
