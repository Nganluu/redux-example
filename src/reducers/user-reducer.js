import {UPDATE_USER} from '../actions/user-action'

export default function userReducer(state = [], {type, payload}) {
    console.log(type)
    switch (type){
        case UPDATE_USER: {return payload.userMail};
        default: return state;
    }
}