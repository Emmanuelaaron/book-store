import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const links = [

    {
      id: 2,
      path: '/',
      text: 'Books',
    },
    {
      id: 1,
      path: '/categories',
      text: 'Categories',
    },

  ];
  return (
    <header className="header">
      <div className="HeaderLeft">
        <h1 className="bookStoreHeading">BookStore</h1>

        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="headerRight"><FaUser /></div>
    </header>
  );
};

export default Header;
