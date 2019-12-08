import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <header>
      <Menu stackable>
        <Menu.Item style={{ zIndex: 1 }} as={NavLink} exact to='/account/'>Home</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item style={{ zIndex: 1 }} as={NavLink} exact to='/'>Log Out</Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>
  );
};
