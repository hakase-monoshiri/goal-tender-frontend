import React, { Component } from 'react'

export default class TaskForm extends Component {

    state = {
        description: '',
        notes: '',
        goal_id: this.props.goalId,
        completed: false,
    }

    handleInput = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        const task = this.state;
        this.props.add(task);
        this.setState( {
            description: '',
            notes: '',
            }
        );
    }

  render() {
    return (
      <form className='task-form' onSubmit={this.handleSumbit}>

        <h4>Add a new task:</h4>

        <br/>
        <button className='add-task-button' type='submit' > + </button>
    
        <label htmlFor='description'> What's the task: </label>
        <input type="text" className='task-description' name="description" onChange={this.handleInput} value={this.state.description}></input>

        <br/>

        <label htmlFor='notes'> Any notes?</label>
        <input type="text-area"  className="task-notes" name="notes" onChange={this.handleInput} value={this.state.notes}></input>

        <br/>

        

      </form>
    )
  }

}
