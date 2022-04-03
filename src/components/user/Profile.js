import React from 'react'
import { connect } from 'react-redux'
import logout from '../../actions/user/logout'

export const Profile = (props) => {
  return (
    <div className='profile-page'>
        <h2 className='profile-header'> My Profile:</h2>

        <br/>

        <h3>Name: </h3> <p>{props.user.name}</p>

        <br/>

        <h3>Email: </h3> <p>{props.user.email}</p>

        <br/>

        <button className='logout-button' onClick={() => props.logout()}>Logout</button>     
    </div>
  )
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)