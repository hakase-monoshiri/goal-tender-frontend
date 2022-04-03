export default function addGoal(goal) {

    return (dispatch) => {

        dispatch( { type: "START_GOAL_ADD_REQUEST"});

        const token = localStorage.getItem("jwt");
        
        fetch(`${process.env.REACT_APP_API_URL}/goals`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(goal),
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    dispatch( {type: "error", error: data} )
                }
                else {
                dispatch( {type: "ADD_GOAL", goal: data } );
                }
            });


    }
}