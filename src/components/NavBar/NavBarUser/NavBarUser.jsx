import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from 'Redux/auth/auth-selectors';
import { logout } from 'Redux/auth/auth-operations';

// import css from './NavBarUser.module.css';

const NavBarUser = () => {
  const { name, email } = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name}, {email} <button onClick={onLogout}>Logout</button>
      <button>Кнопка-Хуёпка</button>
    </div>
  );
};

export default NavBarUser;
