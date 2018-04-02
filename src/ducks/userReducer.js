import axios from "axios";

// CONSTANTS (ACTION TYPES)
const GET_USER = "GET_USER";

// ACTION CREATORS
export function getUser(){
    return {
        type: GET_USER,
        payload: axios
            .get("/api/user")
            .then(res => {
                return res.data;
            })
            .catch(err => err)
    };
}

//INITIAL STATE
const initialState = {
    user: {},
    isLoading: false,
    didErr: false,
    errMessage: null
}; 

export default function userReducer(state = initialState, action){
    switch(action.type){
        // WAITING FOR RESPONSE
        case`${GET_USER}_PENDING`:
          return {
            ...state,
            isLoading: true
        };
        //RECEIVED RESPONSE
        case `${GET_USER}_FULFILLED`:
           return {
               ...state,
               isLoading: false,
               user: action.payload
           };
        case `${GET_USER}_REJECTED`:
           return {
               ...state,
               isLoading: false,
               didErr: true,
               errMessage: action.payload
           }

           default: 
            return state;
    }
}