import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Grid, Segment } from 'semantic-ui-react';
import NavInternal from './internal/NavInternal';
import SideNav     from './internal/SideNav';
import AccountHome from './internal/AccountHome';
import Settings    from './internal/Settings';
import Users       from './internal/Users';
import NavExternal from './external/NavExternal';
import Home        from './external/Home';
import Login       from './external/Login';
import Signup      from './external/Signup';
import ErrorPage   from './ErrorPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

        {/*============================================*/}
        {/* Internal */}
        {/*============================================*/}
        <Route path="/account">
          <NavInternal />
          <Grid style={{height:'100%'}}>
            <Grid.Row stretched>
              <Grid.Column width={3}>
                <Segment style={{ borderRadius: 0 }} >
                  <SideNav/>
                </Segment>
              </Grid.Column>
              <Grid.Column width={10}>
                <Container>
                  <Switch>
                    <Route exact path="/account/" component={AccountHome} />
                    <Route exact path="/account/settings" component={Settings} />
                    <Route exact path="/account/users" component={Users} />
                    <Route component={ErrorPage} />
                  </Switch>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Route>

        {/*============================================*/}
        {/* External */}
        {/*============================================*/}
        <Route path="/">
          <NavExternal />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
