import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'Redux/auth/auth-selectors';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

import items from './item';

import css from './NavBar.module.css';

// const getFullName = ({ isActive }) => {
//     return isActive ? `${css.link} ${css.active}` : css.link;
// }

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <div className={css.container}>
        <div>
          <ul className={css.menu}>{elements}</ul>
        </div>
        <div>
          {!isLogin && <NavBarAuth />}
          {isLogin && <NavBarUser />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
