import React, { Component } from "react";
import TaskContainer from "../containers/TaskConatiner";
import GoalProgressBar from "./GoalProgressBar";

class Goal extends Component {

    state = {
        activeTasks: false,
    }

    showHideTasks = () => {
        console.log(this.state.activeTasks)
        this.setState( prevState => ({activeTasks: !prevState.activeTasks}));
    }

    
    render () {
        return(

        <div className="goal" id={this.props.goal.id}>
            <div className="goal-title">
                <h2>{this.props.goal.name}</h2>
                <GoalProgressBar percentComplete={this.props.goal.percent_complete} />
            </div>
            <div className="goal-details">

                <button className="goal-delete-button" onClick={() => this.props.delete(this.props.goal.id)} >X </button>

                <h4> Description:</h4>
                <p> {this.props.goal.description}</p>
                
            </div>
                
           
            <button onClick={this.showHideTasks} className='task-display-button'> {this.state.activeTasks? 'Hide Tasks': 'Show Tasks'} </button>
           
            {this.state.activeTasks ? < TaskContainer  goalId={this.props.goal.id}/> : null}
            

        </div>
        )
    }

}

export default Goal

Goal.defaultProps = { 
    id: null,
    name: "No Goal Found",
    description: "no description",
    percent_complete: 0,
    completed: false,
    archived: false,
}