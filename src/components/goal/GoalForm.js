import React, { Component } from 'react'

export default class GoalForm extends Component {

    state = {
        name: '',
        description: ''
    }

    handleInput = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        const goal = this.state;
        this.props.add(goal);
        this.setState( {
            name: '',
            description: ''
            }
        );
    }

  render() {
    return (
      <form className='goal-form' onSubmit={this.handleSumbit}>

        <h2>Add New Goal:</h2>

        
        <button type='submit' className='add-goal-button' >+</button>


        <label htmlFor='name'> What's Your Goal? </label>
        <input type={"text"} className="goal-name" name="name" onChange={this.handleInput} value={this.state.name}></input>

        <br/>

        <label htmlFor='description'> Give it a short description: </label>
        <textarea rows='3' className="goal-description" name="description" onChange={this.handleInput} value={this.state.description}></textarea>

        <br/>

      </form>
    )
  }

}
