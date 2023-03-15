import { useSelector } from 'react-redux';

import { getUserName } from 'Redux/auth/auth-selectors';

// import css from './NavBarUser.module.css'

const NavBarUser = () => {
  const { name } = useSelector(getUserName);

  return (
    <div>
      {name}, <button>Logout</button>
    </div>
  );
};

export default NavBarUser;
