import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent';
import TeamComponent from './TeamComponent';
import './DottedBox.css'
import './header.css'
//import ResponsiveNavBar from './navbar'


class DottedBox extends Component {
    constructor(props){
    super(props);
    this.state={
      isMin:false
    };
  };
  render() {
    return (
       <Router>
      <div className='App'>
         <div className='bs-scrolling-header'>
           <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
             <input type="hidden" name="cmd" value="_s-xclick"></input>
             <input type="hidden" name="hosted_button_id" value="6XU6AKK3B2ZRE"></input>
             <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"></input>
                   <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" className='button-header'/>
           </form>


         </div>
        <h1>SHOPPING STOP</h1>
        <ul>
          <li>
            <Link to='/'><img src='https://cdn.pixabay.com/photo/2017/08/06/17/13/diamond-2594307__340.jpg'  className='DottedBox_img' alt='text'/></Link>
            <Link to='/about'><img src='https://cdn.pixabay.com/photo/2017/08/02/14/22/ring-2571761__340.jpg' className='DottedBox_img' alt='text2'/></Link>
            <Link to='/team'><img src='https://cdn.pixabay.com/photo/2015/06/17/20/00/wedding-812967__340.jpg' className='DottedBox_img' alt='text3'/></Link>
          </li>
        </ul>
        <br/><br/><br/><br/><br/>
        <Route path='/' exact strict component={HomeComponent}></Route>
        <Route path='/about' exact strict component={AboutComponent}></Route>
        <Route path='/team' exact strict component={TeamComponent}></Route>
      </div>
       </Router>
    );
  }
}

export default DottedBox
