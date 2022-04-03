import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar (props) {
    console.log(props);

    if (props.user.email) {
        return (
            <div className='navbar'>
                <Link to="/profile">Profile</Link>

                <Link to="/goals">Back to Goals</Link>
            </div>
        )
    }
    else {
        return (
            <div className='navbar'>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }
}
