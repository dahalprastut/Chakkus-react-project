import React, { Component } from 'react';
import { width as MobileWidth } from '../../config/index'
import LoginLeftComponent from './LoginLeftComponent';

class Login extends Component {

    state = {
        click : false,
        signIn: true,
        timedOut: false
    }

    loginClickedHandler = () => {
        this.setState({
            click : !this.state.click,
            signIn : !this.state.signIn
        })
        this.timeOut();
    }

    timeOut=()=>{
        setTimeout(() => {
                this.setState({
                    timedOut: !this.state.timedOut
                })
        }, 500)
    }

    render() {
        return (
            <div className="login-box">
                <div className="box clearfix">
                    <div className="left" style = {this.state.click ? {transform : 'translateX(150%)'}: null}>
                        {
                            this.state.timedOut ? 
                            (

                                <LoginLeftComponent heading={'Login'} button ={'Sign Up'} click ={this.loginClickedHandler}/>
                            ) :
                           
                            (
                                <LoginLeftComponent heading={'Welcome Back'} button ={'Sign In'} click ={this.loginClickedHandler}/>

                            )
                
                              

                            
                        }
                    </div>

                    <div className="right" style = {this.state.click ? {transform : 'translateX(-60%)'}: null}>

                        {
                            this.state.timedOut ? 
                            (
                                <div>
                                    <h3>
                                        <em>Sign In You Person</em>
                                        <div className="align clearfix">

                                            <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                            <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                            <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                            <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                        </div>
                                    </h3>

                                    <form>
                                        Email: <br />
                                        <input type="text" defaultValue="" />
                                        Password: <br />
                                        <input type="password" defaultValue="" />
                                        <button>Forget Your Password?</button>

                                        <input type="Submit" value="Sign In" className="btn" />
                                    </form>
                                </div>
                                
                            ) :
                            (
                                <div>
                                    <h3>
                                        <em>Create Account</em>
                                        <div className="align clearfix">

                                            <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                            <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                            <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                            <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                        </div>
                                    </h3>

                                    <form>
                                        Name: <br />
                                        <input type="text" defaultValue="" />
                                        Email: <br />
                                        <input type="text" defaultValue="" />
                                        Password: <br />
                                        <input type="password" defaultValue="" />

                                        <input type="Submit" value="Sign Up" className="btn" />
                                    </form>
                                </div>
                           

                             )
                        }
                        {/* <h3>
                            <em>Create Account</em>
                            <div className="align clearfix">

                                <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                                <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                                <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                            </div>
                        </h3>

                        <form>
                            Name: <br />
                            <input type="text" defaultValue="" />
                            Email: <br />
                            <input type="text" defaultValue="" />
                            Password: <br />
                            <input type="text" defaultValue="" />

                            <input type="Submit" value="Submit" className="btn" />
                        </form> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;