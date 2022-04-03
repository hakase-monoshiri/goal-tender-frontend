import React from "react";
import { connect } from "react-redux";
import addGoal from "../../actions/goal/addGoal";
import deleteGoal from "../../actions/goal/deleteGoal";
import fetchGoals from "../../actions/goal/fetchGoals";
import Goal from "../goal/Goal"
import GoalForm from "../goal/GoalForm";


// const GOALS = ["this is a goal", "another goal", "a third Goal"];

class GoalsContainer extends React.Component {

    generateGreeting = () => {
        const greetings = [
            'Hello',
            'Konnichi wa',
            'Hola',
            'Saluations',
            'Sup',
            'Howdy',
            'Yo',
        ];
        if (this.props.user.name) {
            return (
                `${greetings[Math.floor(Math.random() * greetings.length)]}, ${this.props.user.name} `
            )
        }
        else {
            return  greetings[Math.floor(Math.random() * greetings.length)] 
        }


    }


    generateGoals = () => {
        return (
       
       this.props.goals.map( (containerGoal) => {
            return (

                < Goal goal={containerGoal} key={containerGoal.id} delete={this.props.deleteGoal}/>
                
            )
        })
        
        )
    }

    render () {
        return (
            <div className="goals-container">
                <h1 id="goal-container-greeting">{this.generateGreeting()}! Here are your goals:</h1>
                {this.generateGoals()}

                < GoalForm add={this.props.addGoal}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    goals: state.goals,
    user: state.user
})

const mapDispatchToProps = {
    fetchGoals,
    addGoal,
    deleteGoal,
}

export default connect( mapStateToProps, mapDispatchToProps )(GoalsContainer);