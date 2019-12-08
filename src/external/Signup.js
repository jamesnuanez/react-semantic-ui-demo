import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Grid, Form, Header, Button } from 'semantic-ui-react';

export default () => {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Segment>
              <Header as='h1'>Sign Up</Header>
              <p>Click "Sign Up" to access the account page.</p>
              <Form>
                <Form.Input value='test' label='Username' type='text' disabled />
                <Form.Input value='pass' label='Password' type='password' disabled />
                <Form.Checkbox label='Keep me logged in for 30 days'/>
                <Button as={Link} to='/account' color='teal' size='large'>Sign Up</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
