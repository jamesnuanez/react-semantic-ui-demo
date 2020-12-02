import React, { Component } from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';

class AccountHome extends Component {

  render() {
    return (
      <div>
        <Header as='h1'>Account Home</Header>
        <Segment>
          <p>
            <Icon name='arrow left' />
            Choose "Settings" or "Users"
          </p>
        </Segment>
      </div>
    );
  }
};

export default AccountHome;
