import React, { Component } from 'react'
import { connect } from 'react-redux'
import signupUser from '../../actions/user/signupUser'

class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    }

    handleInput = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirmation) {
            const user = {...this.state};
            delete user.passwordConfirmation;
            this.props.signup(user);
            this.setState( {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: ''
                }
            );
        }
        else {
            alert("Password and confirmation don't match")
        }

    }

  render() {
    return (
      <form className='sign-up-form' onSubmit={this.handleSumbit}>

        <label htmlFor='name'> What's Your Name: </label>
        <input type={"text"} className="name" name="name" onChange={this.handleInput} value={this.state.name}></input>

        <br/>

        <label htmlFor='email'> Enter Your Email: </label>
        <input type={"text"} className="email" name="email" onChange={this.handleInput} value={this.state.email}></input>

        <br/>

        
        <label htmlFor='password'> Enter Your Password: </label>
        <input type="password" className="password" name="password" onChange={this.handleInput} value={this.state.password}></input>

        <br/>

        <label htmlFor='password_confirmation'> Confirm Your Password: </label>
        <input type="password" className="password_confirmation" name="passwordConfirmation" onChange={this.handleInput} value={this.state.passwordConfirmation}></input>

        <br/>

        <button className='sign-up-button' type='submit' >Sign Up!</button>
 
      </form>
    )
  }

}


const mapDispatchToProps = {
  signup: signupUser
}

export default connect(null, mapDispatchToProps)(SignUpForm)