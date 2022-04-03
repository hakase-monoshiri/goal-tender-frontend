import React from 'react';

export default function Task (props) {
 
  console.log(props);
  return <div className='task' id={props.task.id} >

    <input className='task-completed-box' type="checkbox" onChange={(e) => {e.preventDefault(); props.updateCompleted(props.task)}} checked={props.task.completed}/>

    <button className='task-delete-button' onClick={() => props.delete(props.task.id)}>X</button>

    <p> <strong> {props.task.description} </strong></p>

    <p> {props.task.notes}</p>

  </div>
}
