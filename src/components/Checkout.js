import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import './style.css';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {Link} from "react-router-dom";
import { Card, Typography, Grid, FormControl, TextField, colors } from '@material-ui/core';

// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import{ init } from 'emailjs-com';
init("user_UNtNmTaVkc4M5AAEaD1SG");
const style = {

  box: {
      backgroundColor: '#f0f3f7',
      padding: 20,
      width:"100%",
   },
  
    root1: {
      minWidth: 350,
  
      margin: 10,
     
      padding: 70,
      paddingLeft: 70,
      marginBottom: 50,
      marginLeft: 250,
    },
 
  
   
  }

class Checkout extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { email, name,country,mobile,Address } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'vivekvenil1@gmail.com',
      email: email,
      name:name,
      country:country,
      mobile:mobile,
      Address:Address,
     }
     emailjs.send(
      'service_zreaky5',
      'test',
       templateParams,
      'user_UNtNmTaVkc4M5AAEaD1SG'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      email: '',
      name: '',
      country:'',
      mobile: '',
      Address: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (

      <>
        {/* <Layout> */}
        <Grid  container>
         <Grid item xs={5}/>
         <Grid item xs={3}>
         <Card  style={style.box.root1}>
       
         <Link to="./">Back to shop</Link>
         
         {/* <SplitPane
    split="vertical"
  > */}
         
         <div  className = "col- mx-auto col-md-5 col-lg-4 my-7 " >
        
        
          <h4>Payment Information</h4><br></br>
          <div className="checkout">
          <hr></hr><hr></hr>
                  <Link to="./Payments"><i className="waves-effect waves-light btn" onClick={() => {}}>pay via online</i></Link>        
                </div>
                <hr></hr>
            <h6><b>Cash On Delivery</b></h6>
            
 <hr></hr>
          <Form   onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted" >Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Country</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="country"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                className="text-primary"
                value={this.state.mobile}
                onChange={this.handleChange.bind(this, 'mobile')}
                placeholder="mobile number"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Address</Label>
              <Input
                type="textarea"
                name="address"
                className="text-primary"
                value={this.state.address}
                onChange={this.handleChange.bind(this, 'address')}
              />
            </FormGroup>
            {/* <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Order Comments</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup> */}
<Button variant="primary" type="submit">
              Place Your Order
            </Button>
          </Form>
         
          </div>
          {/* </SplitPane> */}
        {/* </Layout> */}
        </Card>
        </Grid>
     <Grid item xs={5}/>
      </Grid>
      
      </>
     
    )
  }
}
export default Checkout












