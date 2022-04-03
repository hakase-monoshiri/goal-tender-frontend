import React, { Component } from 'react'
import { connect } from 'react-redux'
import login from '../../actions/user/login'

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInput = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        const user = this.state;
        this.props.login(user);
        this.setState( {
            email: '',
            password: ''
            }
        );
    }

  render() {
    return (
      <form className='login-form' onSubmit={this.handleSumbit}>
          <label htmlFor='email'> Enter Your Email: </label>
          <input type={"text"} id="email" name="email" onChange={this.handleInput} value={this.state.email}></input>

          <br/>

          <label htmlFor='password'> Enter Your Password: </label>
          <input type="password" id="password" name="password" onChange={this.handleInput} value={this.state.password}></input>

          <br/>

          <button className='login-button' type='submit' >Login</button>

      </form>
    )
  }

}

export default connect( null, {login} )(LoginForm)