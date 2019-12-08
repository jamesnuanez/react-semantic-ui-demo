import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu text vertical style={{ fontSize: '1.2rem' }} >
      <Menu.Item>
        <Menu.Header>Account</Menu.Header>
        <Menu.Menu>
          <Menu.Item as={NavLink} exact to='/account/settings'>Settings</Menu.Item>
          <Menu.Item as={NavLink} exact to='/account/users'>Users</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Features</Menu.Header>
        <Menu.Menu>
          <Menu.Item>Buttons</Menu.Item>
          <Menu.Item>Sliders</Menu.Item>
          <Menu.Item>Modals</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Setup</Menu.Header>
        <Menu.Menu>
          <Menu.Item>Getting Started</Menu.Item>
          <Menu.Item>Configuration</Menu.Item>
          <Menu.Item>Options</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};
