import React from 'react'
import Navbar from './components/navbar'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/home'
import Cart from './components/Cart'
import footer from'./components/footer'
import Footer from './components/footer'
import Checkout from './components/Checkout'
import Payments from './components/Payments'
const store = createStore(cartReducer);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">               
                    <Navbar /> <br/><br/>
                    <Footer/>        
                    <Switch>
                   
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />  
                    <Route path="/Payments" component={Payments} />  
                    <Route path="/Checkout" component={Checkout} />  
                     
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )  
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
       
      <footer/>
    </Provider>,
    document.getElementById('root')
)


