// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./footer.css";

// function Footer(props) {
//     return(
//         <div className="footer">
//             <div className="container">
//                 <div className="row justify-content-center">             
//                     <div className="col-4 offset-1 col-sm-2">
//                         <h5>    </h5>
//                         <ul className="list-unstyled" className="right">
                          
//                             <li><Link to="/aboutus">About Us</Link></li>
//                             {/* <li><Link to="/menu">Menu</Link></li> */}
//                             <li><Link to="/contactus">Contact Us</Link></li>
//                         </ul>
//                     </div>
//                     <div className="left" >
//                         <h5>Our Address</h5>
//                         <address>
//                          No-22
//                          krishnapuram<br />
//                         kilinochchi<br />
                    
//                         <i className="fa fa-phone fa-lg"></i>: 0779378887<br />
                        
//                         <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
//                             TastyCashew</a>
//                         </address>
//                     </div>
//                     <div className="col-12 col-sm-4 align-self-center">
//                         <div className="text-center">
                          
//                             {/* <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Tastycashews"><i className="fa fa-facebook"></i></a>

//                             <a className="btn btn-social-icon" href="https://www.instagram.com/tasty_cashews/"><i className="fa fa-instagram"></i></a> */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">             
//                     <div className="col-auto">
//                     <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Tastycashews"><i className="fa fa-facebook"></i></a>

// <a className="btn btn-social-icon" href="https://www.instagram.com/tasty_cashews/"><i className="fa fa-instagram"></i></a>
//                         <p>© Copyright 2020 TastyCashews</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Footer;



import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: '0',
    backgroundColor: '#273d2a',
    color: '#b0c7ad',
    height: '60px'

  },
  fit: {
    paddingLeft: 10
  },
margin:{
  marginLeft:200
}

});

function Footer() {
  const classes = useStyles();
  let fullYear = new Date().getFullYear();

  return (
    <AppBar position="fixed" className={classes.appBar} >
      
      <Typography variant="overline" align="center" className="kela">
                
        {fullYear}-{fullYear + 1}, © 2020 Tasty_Cashew's
        <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center"   >                    
                             <a className="col" href="https://www.facebook.com/Tastycashews"><FacebookIcon/></a> &nbsp;

                             <a className="col" href="https://www.instagram.com/tasty_cashews/"><InstagramIcon/></a>   
                       </div>
                     </div>
        <div className="margin" className="left">

        </div>
      </Typography>

    </AppBar>

  )
}

export default Footer

