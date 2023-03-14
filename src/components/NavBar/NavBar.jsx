import { NavLink } from 'react-router-dom';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import items from './item';
import css from './NavBar.module.css';

// const getFullName = ({ isActive }) => {
//     return isActive ? `${css.link} ${css.active}` : css.link;
// }

const NavBar = () => {
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
          <NavBarAuth />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
