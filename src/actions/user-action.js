export const UPDATE_USER = 'updateUser'
export const updateUser = () => (dispatch) => 
    (email)=>{
        fetch("https://randomuser.me/api/email"+email).
        then(response=>response.json()).
        then(response=>{
            {console.log(response.results)}
            dispatch({
                type: UPDATE_USER,
                payload: ({userMail: response.results.email})
            })
        })
    }
