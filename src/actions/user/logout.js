export default function logout() {

  return (dispatch) => {
    
    localStorage.removeItem("jwt");
    dispatch( {type: "LOG_OUT_USER", }
    )

  }
}
