import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Container, Header, Segment, Form, Input, Checkbox, Dropdown, Button, Modal } from 'semantic-ui-react';

const options = [
  {key: 'Free account',      text: 'Free account',      value: 'Free account',      },
  {key: 'Cheap account',     text: 'Cheap account',     value: 'Cheap account',     },
  {key: 'Expensive account', text: 'Expensive account', value: 'Expensive account', },
];

const languages = [
  { key: 'English',  text: 'English',  value: 'English',  },
  { key: 'French',   text: 'French',   value: 'French',   },
  { key: 'German',   text: 'German',   value: 'German',   },
  { key: 'Spanish',  text: 'Spanish',  value: 'Spanish',  },
  { key: 'Korean',   text: 'Korean',   value: 'Korean',   },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese', },
  { key: 'Chinese',  text: 'Chinese',  value: 'Chinese',  },
  { key: 'Russian',  text: 'Russian',  value: 'Russian',  },
];

class AccountHome extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      modalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  addMessage(message) {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        {
          this.state.message
            ? <Message success content={this.state.message} />
            : ''
        }
        <Header as='h1'>Settings</Header>

        {/*============================================*/}
        {/* General Settings */}
        {/*============================================*/}
        <Segment>
          <Checkbox toggle label='Account Enabled'/>
          <Container>
            <Header content='Account Type' />
            <Dropdown
              placeholder='Choose an Option'
              fluid
              selection
              options={options}
            />
          </Container>
          <Container>
            <Header content='Languages' subheader='Choose multiple' />
            <Dropdown
              placeholder='Choose your languages'
              fluid
              multiple
              selection
              options={languages}
            />
          </Container>
          <Button
            color='teal'
            style={{ marginTop: '1.5rem' }}
            onClick={() => this.addMessage('Account updated')}
          >
            Update
          </Button>
        </Segment>

        {/*============================================*/}
        {/* Contact Information */}
        {/*============================================*/}
        <Segment>
          <Header>Contact Information</Header>
          <Form>
            <Form.Group>
              <Form.Field
                control={Input}
                label='Phone Number'
                placeholder='Phone Number'
              />
              <Form.Field
                control={Input}
                label='Email Address'
                placeholder='Email Address'
              />
            </Form.Group>
            <Button
              color='teal'
              onClick={() => this.addMessage('Contact information updated')}
            >
              Update
            </Button>
          </Form>
        </Segment>

        {/*============================================*/}
        {/* Account Management */}
        {/*============================================*/}
        <Segment>
          <Header>Account Management</Header>
          <Button
            color='red'
            onClick={this.openModal}
          >
            Delete Account
          </Button>
          <Modal
            open={this.state.modalOpen}
            onClose={this.closeModal}
          >
            <Modal.Header content='Delete Account'/>
            <Modal.Content>
              <p>Are you sure you want to delete your account?</p>
              <Button onClick={this.closeModal} color='teal' content='No! Keep my account!' />
              <Button as={Link} to='/' color='red' content='DELETE ACCOUNT' />
            </Modal.Content>
          </Modal>
        </Segment>
      </div>
    );
  }
};

export default AccountHome;
