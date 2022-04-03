export default function loadUserFromToken() {

    return (dispatch) => {

        dispatch( { type: "START_USER_LOAD_REQUEST"});

        
        const token = localStorage.getItem("jwt");
        fetch(`${process.env.REACT_APP_API_URL}/profile`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                // save the user somewhere (in state!) to log the user in
                dispatch( {type: "LOG_IN_USER", user: data.user } );
            });


    }
}