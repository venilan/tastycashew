// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Cart1 from "./components/Cart1";
// import Footer from "./components/Footer";
// import ButtonAppBar from"./components/navbar";









// // import logo from "/home/uki/Desktop/uki project/reactjs-basic-auth-withoutdb-master/src/logo.png"

// const style = {
//   paper: {
//     backgroundColor:'#8a8a5c'
//     // flexGrow: 1,
//     // backgroundImage: "URL('https://i8.amplience.net/i/traeger/20190116_Roasted-Rosemary-Cashews_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$')",
//     // color: 'rgb(240, 235, 210'
//   },
//   menuButton: {
//     spacing: 5,
//   },
//   link: {
//     underline: 'none'
//   },

//   // logo: {
//   //   marginTop: "100",
//   //   marginBottom: "20",
//   //   padding: 1,
//   // },

//   appBar: {
//     backgroundColor:"#8a8a5c"
//     // backgroundImage: "URL('https://i8.amplience.net/i/traeger/20190116_Roasted-Rosemary-Cashews_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$')"
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.logOut = this.logOut.bind(this);
//     this.state = {
//       showAdminBoard: false,
//       currentUser: undefined,
//     };
//   }

//   componentDidMount() {
//     let user;
//     if (localStorage.getItem('username')) {
//       user = {
//         username: localStorage.getItem('username'),
//         id: localStorage.getItem('id'),
//         email: localStorage.getItem('email'),
//         roles: localStorage.getItem('roles'),
//       };
//     }

//     if (user) {
//       this.setState({
//         currentUser: user,
//         showAdminBoard: user.roles.includes("ROLE_ADMIN")
//       });
//     }
//   }

//   logOut () {
//     localStorage.clear()
//   }

//   render() {
//     const { currentUser, showAdminBoard } = this.state;

//     return (
//         <div>
//           <ButtonAppBar/>
//            <Footer/>
//          </div>
//     );
    
//   }
// }
// export default App;
