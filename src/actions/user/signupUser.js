export default function signupUser(userData) {


    return (dispatch) => {

        dispatch( { type: "START_USER_CREATE_REQUEST"});


        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify( {user: userData} ),
            })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt);
                console.log(data);
                // save the user somewhere (in state!) to log the user in
                dispatch( {type: "LOG_IN_USER", user: data.user } );
            });


    }
}