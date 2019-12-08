import React, { Component } from 'react';
import { Container, Header, Card, Button, Modal, Label, Icon, Form } from 'semantic-ui-react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      addUserModalOpen: false,
      formName: '',
      formTitle: '',
      formDescription: '',
      users: [
        { name: 'Jane',  title: 'CEO',     mail: 44, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'John',  title: 'CFO',     mail: 1,  description: 'Pulvinar tellus. Aliquam quis tellus et quam mollis ultrices.' },
        { name: 'Tammy', title: 'CTO',     mail: 82, description: 'Dictumst. Nulla odio risus, elementum id malesuada et.' },
        { name: 'Todd',  title: 'VP',      mail: 4,  description: 'Eu quam et metus dignissim feugiat at fringilla nulla.' },
        { name: 'Lucy',  title: 'Manager', mail: 15, description: 'Aliquam nec metus congue, dapibus odio faucibus.' },
        { name: 'Fred',  title: 'Lead',    mail: 32, description: 'Cras hendrerit commodo ante, et condimentum.' },
      ]
    }
    this.addUser = this.addUser.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.openAddUserModal = this.openAddUserModal.bind(this);
    this.closeAddUserModal = this.closeAddUserModal.bind(this);
  };

  openAddUserModal() {
    this.setState({ addUserModalOpen: true })
  }

  closeAddUserModal() {
    this.setState({ addUserModalOpen: false })
  }

  markMailRead(userId) {
    const updatedUsers = this.state.users.map((user, i) => {
      if (i === userId) {
        return { ...user, mail: 0 };
      }
      return user;
    })
    this.setState({ users: updatedUsers })
  }

  updateForm(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addUser(user) {
    this.setState(state => ({
      users: [
        ...state.users,
        {
          name: this.state.formName,
          title: this.state.formTitle,
          description: this.state.formDescription,
          mail: 1,
        }
      ]
    }));
    this.setState({
      formName: '',
      formTitle: '',
      formDescription: '',
    })
    this.closeAddUserModal();
  }

  render() {
    return (
      <div>
        <Header as='h1' content='Users' />

        {/*============================================*/}
        {/* User Cards */}
        {/*============================================*/}
        <Card.Group itemsPerRow={3}>
          {
            this.state.users.map((user, i) => (
              <Card key={i}>
                <Card.Content header={user.name} />
                <Card.Content>
                  <Card.Meta>{user.title}</Card.Meta>
                  <Card.Description>{user.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Modal
                    trigger={<Button>Details</Button>}
                    closeIcon
                  >
                    <Modal.Header>{user.name}</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <Header>{user.title}</Header>
                        <p>{user.description}</p>
                        <Label><Icon name='mail' />{user.mail || 0}</Label>
                        <Label
                          as={Button}
                          content='Mark mail read'
                          onClick={() => this.markMailRead(i)}
                        />
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>

        {/*============================================*/}
        {/* Add User */}
        {/*============================================*/}
        <Container>
          <Button onClick={this.openAddUserModal} color='teal'>Add a new User</Button>
          <Modal
            open={this.state.addUserModalOpen}
            onClose={this.closeAddUserModal}
          >
            <Modal.Header>Modal</Modal.Header>
            <Modal.Content>
              <Form onSubmit={this.addUser}>
                <Form.Input
                  onChange={this.updateForm}
                  value={this.state.formName}
                  label='Name'
                  name='formName'
                />
                <Form.Input
                  onChange={this.updateForm}
                  value={this.state.formTitle}
                  label='Title'
                  name='formTitle'
                />
                <Form.Input
                  onChange={this.updateForm}
                  value={this.state.formDescription}
                  label='Description'
                  name='formDescription'
                />
                <Button>Add User</Button>
              </Form>
            </Modal.Content>
          </Modal>
        </Container>
      </div>
    );
  }
};

export default Users;
