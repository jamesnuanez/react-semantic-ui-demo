import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <header>
      <Menu stackable inverted style={{
        borderRadius: 0,
        borderBottom: '2px solid #fff',
        fontSize: '1.2rem',
      }} >
        <Menu.Item as={NavLink} exact to="/">Home</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} exact to="/signup">Sign Up</Menu.Item>
          <Menu.Item as={NavLink} exact to="/login">Log In</Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>
  );
};
