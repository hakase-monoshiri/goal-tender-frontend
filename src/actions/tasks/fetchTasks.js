export default function fetchTasks() {

    return (dispatch) => {

        dispatch( { type: "START_TASKS_REQUEST"});

        const token = localStorage.getItem("jwt");
        fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
               
                dispatch( {type: "LOAD_TASKS", tasks: data } );
            });


    }
}