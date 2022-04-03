export default function fetchGoals() {

    return (dispatch) => {

        dispatch( { type: "START_GOALS_REQUEST"});

        const token = localStorage.getItem("jwt");
        fetch(`${process.env.REACT_APP_API_URL}/goals`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
               
                dispatch( {type: "LOAD_GOALS", goals: data.goals } );
            });


    }
}