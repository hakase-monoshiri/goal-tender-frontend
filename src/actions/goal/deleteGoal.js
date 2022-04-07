export default function deleteGoal(goalId) {

    return (dispatch) => {

        dispatch( { type: "START_GOAL_DELETE_REQUEST"});

        const token = localStorage.getItem("jwt");
        
        console.log(goalId);

        fetch(`${process.env.REACT_APP_API_URL}/goals/${goalId}`, {
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
                if (data.error) {
                    console.log(data);
                    alert(data.error)
                }
                else {
                dispatch( {type: "DELETE_GOAL", goal: data.id } );
                }
            });


    }
}