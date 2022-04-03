import fetchGoals from "../goal/fetchGoals";

export default function addTask(task) {

    return (dispatch) => {

        dispatch( { type: "START_TASK_ADD_REQUEST"});

        const token = localStorage.getItem("jwt");
        
        fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
            method: "POST",
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
               
                dispatch( {type: "ADD_TASK", task: data } );
            })
            .then(dispatch(fetchGoals())
            );


    }
}