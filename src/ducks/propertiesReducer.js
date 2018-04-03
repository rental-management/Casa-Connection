import axios from 'axios';

// CONSTANTS //
const GET_PROPERTIES = 'GET_PROPERTIES';

// STATE //
const initialState = {
    properties: [],
    isLoading: false,
    didErr: false,
    errMessage: null,
    
};

// ACTION CREATORS //
export function getProperties() {
    return {
        type: GET_PROPERTIES,
        payload: axios
            .get('/properties')
            .then(response => {
                console.log(response, "get properties")
                return response.data
            }).catch(console.log)
    }
}

// REDUCER //
export default function reducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        case `${GET_PROPERTIES}_PENDING`:
            return Object.assign({}, state, { isLoading: true });

        case `${GET_PROPERTIES}_FULFILLED`:
        console.log(action.payload)
            return Object.assign({}, state, { isLoading: false, properties: action.payload });

        case `${GET_PROPERTIES}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });

    default:
        return state;
    }
}

