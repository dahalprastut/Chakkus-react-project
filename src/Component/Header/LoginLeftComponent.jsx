import React, { Component } from 'react';

class LoginLeftComponent extends Component {
    render() {
        return (
            <div className="inner-content">
                <h3>
                    {this.props.heading}
                    <span>Lorem Ipsum</span>

                </h3>

                <button onClick={this.props.click} className="btn effect login-btn">
                    {this.props.button}
                </button>

            </div>
        );
    }
}

export default LoginLeftComponent;