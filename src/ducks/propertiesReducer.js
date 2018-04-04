import axios from 'axios';

// CONSTANTS //
const GET_PROPERTIES = 'GET_PROPERTIES';
const ADD_PROPERTY = 'ADD_PROPERTY';
const GET_PROPERTY = "GET_PROPERTY";


// STATE //
const initialState = {
    properties: [],
    property: [],
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


export function addProperty(propertyName, street, city, state, zip){
    return {
        type: ADD_PROPERTY,
        payload: axios.post('/addproperty', {
            prop_name: propertyName,
            street: street,
            city: city,
            state: state,
            zip: zip
        }).then(response => {
            console.log("add property action creator", response);
            return response.data;
        }).catch(err => {console.log(err)})
    }
}

export function getProperty(id) {
    return {
        type: GET_PROPERTY,
        payload: axios
        .get(`/property/${id}`,{
            id: id
        })
        .then(response => {
            console.log(response, "getProperty")
            return response.data
        }).catch(console.log)
    }
}

// REDUCER //
export default function reducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        //GET PROPERTIES
        case `${GET_PROPERTIES}_PENDING`:
            return Object.assign({}, state, { isLoading: true });

        case `${GET_PROPERTIES}_FULFILLED`:
        console.log(action.payload)
            return Object.assign({}, state, { isLoading: false, properties: action.payload });

        case `${GET_PROPERTIES}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });

            //ADD PROPERTY
        case `${ADD_PROPERTY}_PENDING`:
            return Object.assign({}, state, {isLoading: true});

        case `${ADD_PROPERTY}_FULFILLED`:
            return Object.assign({}, state, {isLoading: false, properties: action.payload});

        case `${ADD_PROPERTY}_REJECTED`:
            return Object.assign({}, state, {isLoading: false, didErr: true, errMessage: action.payload});

        // GET SINGLE PROPERTY
        case `${GET_PROPERTY}_PENDING`:
            return Object.assign({}, state, { isLoading: true });

        case `${GET_PROPERTY}_FULFILLED`:
        console.log(action.payload, "get prop full")
            return Object.assign({}, state, { isLoading: false, property: action.payload });

        case `${GET_PROPERTY}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });
         

    default:
        return state;
    }
}

