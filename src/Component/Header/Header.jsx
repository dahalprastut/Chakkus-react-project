import React, { Component } from 'react';
import './Header.scss';
import '../../App.scss';
import Nav from './Nav';
import Login from './Login';
class Header extends Component {
    
   
    render() {
      
        return (
            <div className="Header">
                <div className="center">
                
                    <Nav />
                    <Login />
                </div>
            </div>
        );
    }
}

export default Header;