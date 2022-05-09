import './header.scss';
import {
  BrowserRouter as Router, NavLink,
} from 'react-router-dom';

const Header = () => {
  const menu = [
    {
      linkTo: '/',
      name: 'Home',
    },
    {
      linkTo: '/about',
      name: 'About',
    },
    {
      linkTo: '/characters',
      name: 'Characters',
    },
    {
      linkTo: '/episodes',
      name: 'Episodes',
    },
  ];

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          {
            menu.map((el) => (
              <li className="menu__item" key={Math.random()}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
                  to={el.linkTo}
                >
                  {el.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
