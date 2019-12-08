import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Segment, Header, Icon, Button } from 'semantic-ui-react';

export default () => {
  return (
    <div>

      {/*============================================*/}
      {/* Banner */}
      {/*============================================*/}
      <div
        style={{
          background: 'url(header.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: '#fff',
          padding: '10rem 1rem',
          textShadow: '0 0.1rem 0.4rem rgba(0,0,0,5)',
        }}
      >
        <Header
          as='h1'
          textAlign='center'
          style={{
            fontSize: '3.5rem',
            color: '#fff',
            lineHeight: '100%',
          }}
        >
          React + Semantic UI
        </Header>
        <Header.Subheader
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            lineHeight: '100%',
          }}
        >
          A really catchy tagline goes here
        </Header.Subheader>
      </div>

      {/*============================================*/}
      {/* Features */}
      {/*============================================*/}
      <Container style={{ marginTop: '2rem' }}>
        <Grid verticalAlign='middle' centered>
          <Grid.Row>
            <Grid.Column computer={5} mobile={16} style={{ padding: '1rem' }}>
              <Segment placeholder>
                <Icon
                  name='lightbulb outline'
                  style={{
                    fontSize: '10rem',
                    lineHeight: '100%',
                    margin: 'auto',
                  }}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column computer={5} mobile={16} style={{ padding: '1rem' }}>
              <Header as='h2' content='Light Bulb'>
              </Header>
              <p>
                Donec euismod ligula odio, in rhoncus nibh tristique eu.
                Morbi augue felis, porttitor ut risus rhoncus, consequat
                auctor justo.
              </p>
              <Button>Learn More</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row reversed='computer'>
            <Grid.Column computer={5} mobile={16} style={{ padding: '1rem' }}>
              <Segment placeholder>
                <Icon
                  name='wrench'
                  style={{
                    fontSize: '10rem',
                    lineHeight: '100%',
                    margin: 'auto',
                  }}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column computer={5} mobile={16} textAlign='right' style={{ padding: '1rem' }}>
              <Header as='h2' content='Wrench'>
              </Header>
              <p>
                Mauris gravida ante et pulvinar facilisis. Integer
                faucibus accumsan quam, nec consectetur mi vestibulum
                nec. Aliquam non commodo lacus, sit amet tempor elit.
              </p>
              <Button>Learn More</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      {/*============================================*/}
      {/* Try it now */}
      {/*============================================*/}
      <div
        style={{
          background: 'url(https://images.unsplash.com/photo-1471572891026-8ca1e66adf49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center',
          backgroundSize: 'cover',
          marginTop: '3rem',
          color: '#fff',
          padding: '10rem 1rem',
          textShadow: '0 0.1rem 0.4rem rgba(0,0,0,5)',
        }}
      >
        <Container textAlign='center'>
          <Header as='h1' style={{color: '#fff'}} content='Ready to dive in?' />
          <Button as={Link} to='/signup' size='massive' color='teal' content='TRY IT NOW' />
        </Container>
      </div>

      {/*============================================*/}
      {/* Footer */}
      {/*============================================*/}
      <div
        style={{
          padding: '3rem 0 6rem',
          background: '#000',
          color: '#fff',
        }}
      >
        <Container textAlign='center'>
          Built by {' '}
          <a href="https://www.jamesnuanez.com">James Nuanez</a>
          {' '} in 2019 using {' '}
          <a href="https://create-react-app.dev/">Create React App</a>
          {' '} and {' '}
          <a href="https://react.semantic-ui.com/">Semantic UI</a>
        </Container>
      </div>
    </div>
  );
};
