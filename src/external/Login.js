import React, { Component } from 'react';
import { Message, Container, Segment, Grid, Form, Header, Button } from 'semantic-ui-react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      invalidLogin: false,
    }
    this.attemptLogin = this.attemptLogin.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  attemptLogin() {
    if (this.state.username === 'test' && this.state.password === 'pass') {
      this.props.history.push('/account');
    } else {
      this.setState({ invalidLogin: true });
    }
  }

  handleUpdate(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>

              {/*============================================*/}
              {/* Login info for demo purposes */}
              {/*============================================*/}
              <Message info>
                Username: test
                <br />
                Password: pass
              </Message>

              {/*============================================*/}
              {/* Error message */}
              {/*============================================*/}
              {
                this.state.invalidLogin
                  ? <Message error>
                      Incorrect login credentials. Please use the following.
                      <br />
                      Username: test
                      <br />
                      Password: pass
                    </Message>
                  : ''
              }

              {/*============================================*/}
              {/* Login form */}
              {/*============================================*/}
              <Segment>
                <Header as='h1'>Login</Header>
                <Form onSubmit={this.attemptLogin} >
                  <Form.Input
                    label='Username'
                    name='username'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleUpdate}
                  />
                  <Form.Input
                    label='Password'
                    name='password'
                    value={this.state.password}
                    type='Password'
                    placeholder='Password'
                    onChange={this.handleUpdate}
                  />
                  <Form.Checkbox label='Keep me logged in for 30 days'/>
                  <Button color='teal' size='large'>Log In</Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
};

export default Login;