import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
// import Home from './Home';
// import SwipeableTextMobileStepper from './photo';
// import Login from './login';
import Cart from './Cart';
import home from './home'
// import home from '../home';
import home1 from './home1'
import { Provider } from 'react-redux';
// import createReduxStore from 'create-redux-store';
import { createStore } from 'redux'
import cartReducer from './reducers/cartReducer';
import RegisterForm from'./RegisterForm';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import './style.css';
import logo from '/logo.png';
import ContactForm from'./ContactForm';
import About from './About'
// import Checkout from './Checkout';
// import RegisterForm from './registrationForm/RegisterForm';




const store = createStore(cartReducer);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mar:{
    paddingLeft:"1150px",
  },
  lela:{
    marginleft:"1300px",
  },
  appBar: {
    top: 'auto'
  },
  con:{
    paddingleft:"500px"
  }

}));

const style = {
  app1:{
    backgroundColor:"#174a33",
  },
  home:{
    color:"#cfc3a6"
    
  }
  
 
};


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    // <BrowserRouter>
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar style={style.app1}>
            
                 {/* <Link className="right" to="/home" className="brand-logo"><Button color='inherit'>
                  <strong className="brand-logo">Home</strong>
                </Button></Link>  */}
{/* style={{fontSize:"0px"}}   */}
                 <Link className="right" to="/home" className="brand-logo"><Button color='inherit'>
                    <img style={{ width: "50px"}} src={logo}></img>
                 </Button></Link>  
                 
                 <Link  to="/About" className={classes.con}><Button color='inherit'>
                  <strong className="brand-logo">Aboutus</strong>
                </Button>
                </Link> 
      
                <Link className="right" to="/" className="brand-logo"><Button color='inherit'>
                  <strong className="brand-logo">store</strong>
                </Button>
                </Link> 
                
                <Link to="/cart" className={classes.mar}><Button color='inherit'>
                  <strong className="brand-logo"><LocalMallIcon/></strong>
                </Button>
                </Link> 
               
              
                <Link  to="/RegisterForm" className="brand-logo"className={classes.lela}><Button  color='inherit'>
                  <strong className="brand-logo">Register</strong>
                </Button>
                </Link> 

                <Link  to="/ContactForm" className="brand-logo"className={classes.lela}><Button  color='inherit'>
                  <strong className="brand-logo">Contactus</strong>
                </Button>
                </Link> 

                
        </Toolbar>
      </AppBar>
      <Switch>
      <Provider store={store}>
        

      <Route path="/home" component={home1}/>
        {/* <Route path="/Checkout" component={Checkout}/> */}
        <Route path="/About" component={About}/>
        <Route path="/ContactForm" component={ContactForm}/>
        <Route exact path="/RegisterForm" component={RegisterForm} />
        {/* <Route path="/Cart" component={ Cart } /> 
         */}
         
        </Provider>
      </Switch>
    </div>
    
  );
}

