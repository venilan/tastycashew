import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Payments from './Payments'
import Checkout from './Checkout'
import { Link } from 'react-router-dom'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    render() {

        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+300.00Rs)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} Rs</b></li>
                </div>
                <div className="checkout">
                  {/* <a className="waves-effect waves-light btn" to="./Payments">Checkout</a> */}
                  <Link to="./Checkout"><i className="waves-effect waves-light btn" onClick={() => { }}>Checkout</i></Link>
                  {/* <Link to="/Checkout"><i className="waves-effect waves-light btn" onClick={() => { }}>Checkout</i></Link> */}
               
                </div>
            </div>
            
        )
    }
    

}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)