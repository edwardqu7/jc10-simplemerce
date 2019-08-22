import React, { Component } from 'react'

class Register extends Component {


    onRegisterClick = () => {
        
    }

    render() {
        return (
            <div>
                <div className='col-sm-4 mx-auto card mt-5'>
                    <div className='card-body'>
                        <div className="card-title border-bottom border-secondary">
                            <h1>Register</h1>
                        </div>
                        
                        <form className='form-group'>
                            <div className="card-title ">
                                <h4>Username</h4>
                            </div>
                            <input type='text' className='form-control'/>

                            <div className="card-title ">
                                <h4>Email</h4>
                            </div>
                            <input type='email' className='form-control'/>

                            <div className="card-title ">
                                <h4>Password</h4>
                            </div>
                            <input type='password' className='form-control'/>

                        </form>
                        
                        <button 
                            className="btn-block btn btn-outline-primary mt-2"
                            onClick={this.onRegisterClick}
                        >Register</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Register