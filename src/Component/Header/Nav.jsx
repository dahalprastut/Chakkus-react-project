import React, { Component } from 'react';
import {width as MobileWidth } from '../../config/index'
class Nav extends Component {

    state={
        shown:false,
        mobileSpecial: true
    }

    showNav = ()=>{
        this.setState({
            shown: !this.state.shown,
        })
    }

    windowResized=(e)=>{
        console.log(e);
        let width = e.target.innerWidth;
        if(width > MobileWidth){
            this.setState({
                shown: true,
                mobileSpecial : true

            })
        }else{
            this.setState({
                mobileSpecial: false
            })
        }
    }

    componentDidMount(){
        if(window.innerWidth > MobileWidth){
            this.setState({
                shown: true,
                mobileSpecial: true
            })
        } else{
            this.setState({
                shown: false,
                mobileSpecial: false

            })
        }
    }

    render() {
        window.onresize = this.windowResized
        return (
            <nav>

                <div className="mobile-nav">
                    <ul>
                        <li className="logo"><a href="#">LOGO</a></li>
                        <li className="contact-nav"><a href="#">contact us</a></li>
                            
                    </ul>
                </div>
                <ul  style={this.state.shown ? { display:'block'} : { display:'none'} } className="clearfix">
                    <li ><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our team</a></li>
                    <li style={this.state.mobileSpecial ? {display:'block'} : {display:'none'}} className="logo"><a className="special" href="#">Logo</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li style={this.state.mobileSpecial ? {display:'block'} : {display:'none'}} className="contact-nav"><a className="special" href="#">contact us</a></li>
                </ul>
                <button className="hidden-navBar" onClick={this.showNav}>
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        );
    }
}

export default Nav;