import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchGoals from '../../actions/goal/fetchGoals'
import fetchTasks from '../../actions/tasks/fetchTasks'
import loadUserFromToken from '../../actions/user/loadUserFromToken'
import login from '../../actions/user/login'
import logout from '../../actions/user/logout'
import signupUser from '../../actions/user/signupUser'
import Navbar from '../Navbar'


export class UserContainer extends Component {

  componentDidMount () {

    this.props.loadUserFromToken();
    

  }


  render() {
    if (this.props.user.email) {
    this.props.fetchGoals();
    this.props.fetchTasks();
    }

    console.log(this.props)

    return (
      <div className='header'>
        <h1 id='app-title'> Goal Keeper! </h1>
        < Navbar user={this.props.user}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
  login,
  signupUser,
  loadUserFromToken,
  logout,
  fetchGoals,
  fetchTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
