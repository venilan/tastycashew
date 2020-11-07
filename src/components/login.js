// import React, { Component } from "react";

// import { Card, Typography, Grid, FormControl, TextField, colors } from '@material-ui/core';
// import Button from '@material-ui/core/Button';


// const style = {

// box: {
//     backgroundColor: '#f0f3f7',
//     padding: 20,
//     width:"100%",
//  },

//   root1: {
//     minWidth: 350,
//     backgroundColor:'#313131',
//     margin: 10,
//     color: 'white',
//     padding: 70,
//     paddingLeft: 70,
//     marginBottom: 50,
//     marginLeft: 250,
//   },
//   h1:{
//     color:"white",  
//     marginBottom: 10,
//   },

//   root: {
//     backgroundColor:"greygreen",
//     color: "white",
  
//   },
// }

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       message: ""
//     };
//   }

//   onChangeUsername = (e) => {
//     this.setState({
//       username: e.target.value
//     });
//   }

//   onChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     });
//   }

//   handleLogin = (e) => {
//     e.preventDefault();

//     if (this.state.username && this.state.password) {
//           console.log("username = " + this.state.username)
//           console.log("password = " + this.state.password)
//           localStorage.setItem('id', '1');
//           localStorage.setItem('username', this.state.username);
//           localStorage.setItem('email', 'Kaju@gmail.com');
//           localStorage.setItem('email', '');
//           localStorage.setItem('roles', 'ROLE_ADMIN');
//           this.props.history.push("/profile");
//           window.location.reload();
//     } else {
//       this.setState({
//         message: "Empty username or password"
//       })
//     }
//   }

//   render() {
//     return (
//       <Grid container>
//         <Grid item xs={3}/>
//         <Grid item xs={2}>
//               <Card style={style.root1}>
//                 <form onSubmit={this.handleLogin}>
//                   <Grid container spacing={4}>
//                       <Grid item xs={12}>
//                        <h1 style={style.h1}>Login</h1> 
//                       </Grid>
//                       <Grid item xs={12}>
//                       <Card style={style.box}>
//                       <TextField 
                    
//                         id="outlined-text"
//                         helperText="Please enter Username"
//                         label="Username"
//                         type="text"
//                         InputLabelProps={{
//                           shrink: true,
//                         }}
//                         variant="outlined"
//                       />
//                         </Card>
//                       </Grid>
//                       <Grid item xs={12}>
//                       <Card style={style.box}>
//                       <TextField 
//                         id="outlined-password-input"
//                         helperText="Please enter password"
//                         label="Password"
//                         InputLabelProps={{
//                           shrink: true,
//                         }}
//                         type="password"
//                         autoComplete="current-password"
//                         variant="outlined"
//                       />
//                       </Card>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControl>
//                         <Button variant="contained" color="white" href="#contained-buttons">
//                             Login
//                          </Button>
//                         </FormControl>
//                       </Grid>
//                  </Grid>
//                   {this.state.message && (
//                     <div>
//                       <Typography color='error' variant="overline" display="block" gutterBottom>
//                           <strong>{this.state.message}</strong>
//                       </Typography>
//                     </div>
//                   )}
//                 </form>
//                 </Card>
//         </Grid>
//         <Grid item xs={5}/>
//       </Grid>
//     );
//   }
// }


// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
//             <form>

//                 <h3>Log in</h3>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>
//         );
//     }
// }



import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

