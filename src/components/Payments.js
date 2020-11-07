import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function Payments() {
  const [products] = React.useState({});

  async function handleToken(token, addresses) {
    const response = await axios.post("", { token, products });
    const { status } = response.data;

    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container" style={{}}>
      <div className="product">
        <h1>{products.name}</h1><br/>
        <h3>{products.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51Hj4p7DCAoxNnJeojLfpJPv6oYsOp4ePEh4KroB6shuis8kHKjhe1wgNnZWuIGSBPhXix48uxbpTHsedzxlaFsR500FOey2tZb"
        token={handleToken}
        amount={products.price * 100}
        name="TastyCashew"
        billingAddress
        shippingAddress
      />
    </div>
   
  );
}

export default Payments;


// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import StripeCheckout from 'react-stripe-checkout';

// // const onToken = (token) => {
// //   console.log('Stripe Token', token);
// // };

// // const Payments = ({
// //  price, title, children, ...props
// // }) => (
// //   <StripeCheckout
// //     name="TastyCashew's"
// //     description={title}
// //     token={onToken}
// //     amount={price * 100}
// //     stripeKey={'pk_test_51Hj4p7DCAoxNnJeojLfpJPv6oYsOp4ePEh4KroB6shuis8kHKjhe1wgNnZWuIGSBPhXix48uxbpTHsedzxlaFsR500FOey2tZb'}
// //   >
// //     {children || <span {...props}>amukunga</span>}
// //   </StripeCheckout>
// // );
// // Payments.propTypes = {
// //   price: PropTypes.number,
// //   title: PropTypes.string,
// //   children: PropTypes.node,
// // };

// // export default Payments;

// orgingal code from npm website

// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';
 
// export default class TakeMoney extends React.Component {
//   onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }
 
//   // ...
 
//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         stripeKey="pk_test_51Hj4p7DCAoxNnJeojLfpJPv6oYsOp4ePEh4KroB6shuis8kHKjhe1wgNnZWuIGSBPhXix48uxbpTHsedzxlaFsR500FOey2tZb""
//       />
//     )
//   }
// }
// <StripeCheckout
//   name="TastyCashew  // the pop-in header title
//   description="" // the pop-in header subtitle
//   image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
//   ComponentClass="div"
//   panelLabel="0.00" // prepended to the amount in the bottom pay button
//   amount={1000000} // cents
//   currency=";lkr"
//   stripeKey="..."
//   locale="zh"
//   email="info@vidhub.co"
//   // Note: Enabling either address option will give the user the ability to
//   // fill out both. Addresses are sent as a second parameter in the token callback.
//   shippingAddress
//   billingAddress={false}
//   // Note: enabling both zipCode checks and billing or shipping address will
//   // cause zipCheck to be pulled from billing address (set to shipping if none provided).
//   zipCode={false}
//   alipay // accept Alipay (default false)
//   bitcoin // accept Bitcoins (default false)
//   allowRememberMe // "Remember Me" option (default true)
//   token={this.onToken} // submit callback
//   opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
//   closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
//   // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
//   // you are using multiple stripe keys
//   reconfigureOnUpdate={false}
//   // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
//   // useful if you're using React-Tap-Event-Plugin
//   triggerEvent="onTouchTap"
//   >
//   <button className="btn btn-primary">
//   {children || <span {...props}>amukunga</span>}
 
//     Use your own child component, which gets wrapped in whatever
//     component you pass into as "ComponentClass" (defaults to span)
//   </button>
// </StripeCheckout>