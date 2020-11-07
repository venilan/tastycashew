import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

const style = {

   
  }


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email,  message } = this.state
    let templateParams = {
        from_name: email, 
      to_name: 'vivekvenil1@gmail.com',
      name:name,
      email: email,
      message: message,
     }
     emailjs.send(
      'service_3tcvi8h',
      'test',
       templateParams,
      'user_UNtNmTaVkc4M5AAEaD1SG'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        {/* <Layout> */}
        <div id="main-registration-container">
     <div id="register">
          <h3 className="p-heading1">Get in Touch</h3>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                className="lola" 
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="lola" className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>

<FormGroup controlId="formBasicMessage">
              <Label className="lola" className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        {/* </Layout> */}
        </div>
</div>
      </>
    )
  }
}
export default ContactForm