import fetchGoals from '../goal/fetchGoals'

export default function updateTaskCompleted(task) {

    return (dispatch) => {
        
        dispatch( { type: "START_TASK_UPDATE_REQUEST"});

        task.completed = !task.completed;
        const token = localStorage.getItem("jwt");
        
        fetch(`${process.env.REACT_APP_API_URL}/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(task),
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                dispatch( {type: "UPDATE_TASK", task: data } );
            })
            .then( () => {
                dispatch(fetchGoals());
                }
            )
        


    }
}