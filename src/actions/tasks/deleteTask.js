import fetchGoals from "../goal/fetchGoals";

export default function deleteTask(taskId) {

    return (dispatch) => {

        dispatch( { type: "START_TASK_DELETE_REQUEST"});

        const token = localStorage.getItem("jwt");
        
        console.log(taskId);

        fetch(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
               
                dispatch( {type: "DELETE_TASK", taskId: data.id } );
            })
            .then( () => {
                dispatch(fetchGoals());
            }
            );


    }
}