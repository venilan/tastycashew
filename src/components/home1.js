import React, { Component } from "react";
import Cart from "./Cart";
import SW from "./photo"
import Footer from "./footer"
import "./footer.css";
// import Container from "./Container";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
        this.setState({
          content: "Public content"
        });
  }

  render() {
    return (
      // <Container content={this.state.content}/>
  <div>
    <SW/> 
    
  <Footer/>
  </div>
    )
  }
}

