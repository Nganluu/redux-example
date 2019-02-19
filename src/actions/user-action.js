export const UPDATE_USER = 'updateUser'
export const updateUser = (email) => (dispatch) => 
    {
        console.log(email);
        fetch("https://randomuser.me/api/?results=10&email=" + email).
        then(response=>response.json()).
        then(response=>{
            {console.log(response.results)}
            dispatch({
                type: UPDATE_USER,
                payload: ({userMail: response.results})
            })
        })
    }
