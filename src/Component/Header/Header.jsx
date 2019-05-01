import React, { Component } from 'react';
import './Header.scss';
import '../../App.scss';
import Nav from './Nav';
class Header extends Component {
    
   
    render() {
      
        return (
            <div className="Header">
                <div className="center">
                
                    <Nav />
                </div>
            </div>
        );
    }
}

export default Header;