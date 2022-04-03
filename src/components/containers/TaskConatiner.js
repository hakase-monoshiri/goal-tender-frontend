import React from "react";
import { connect } from "react-redux";

import fetchTasks from "../../actions/tasks/fetchTasks";
import addTask from "../../actions/tasks/addTask";


import Task from "../task/Task"
import TaskForm from "../task/TaskForm";
import deleteTask from "../../actions/tasks/deleteTask";
import updateTaskCompleted from "../../actions/tasks/updateTaskCompleted";

class TaskContainer extends React.Component {

    generateTasks = () => {
        if (this.props.goalId) {
            const tasks = this.props.tasks.filter( task => task.goal_id === this.props.goalId);

            return (
                tasks.map( (task) => {
                    return (
                    <li  key={task.id}>
                        < Task task={task} goalId={this.props.goalId} delete={this.props.deleteTask} updateCompleted={this.props.updateTaskCompleted} /> 
                    </li>
                    )
                })
            )
        }
        else {
            return (
                this.props.tasks.map( (task) => {
                    return (
                    <li  key={task.id}>
                        < Task task={task} updateCompleted={this.props.updateTaskCompleted} /> 
                    </li>
                    )
                })
            )
        }
        
    }


    render () {
        return (
            <div className="tasks-container">
                <h3> Tasks:</h3>
                <ul>{this.generateTasks()}</ul>

                <TaskForm add={this.props.addTask} goalId={this.props.goalId}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

const mapDispatchToProps = {
    fetchTasks,
    addTask,
    deleteTask,
    updateTaskCompleted,
}

export default connect ( mapStateToProps, mapDispatchToProps)(TaskContainer);

TaskContainer.defaultProps = {
    tasks: []
}
