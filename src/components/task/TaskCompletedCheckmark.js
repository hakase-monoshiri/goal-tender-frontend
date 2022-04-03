import React, { Component } from 'react'

export default class TaskCompletedCheckmark extends Component {

    state = {
        completed: false,
    }

    handleCheck = () => {
        this.setState( (previousState) => {
          return {
            completed: !previousState.completed
            }
          }
        );
    }

  render() {
    return (
      <input className='task-checkbox' type="checkbox" onChange={this.handleCheck} checked={this.state.completed}/>
    )
  }

}
