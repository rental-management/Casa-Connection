import axios from 'axios';

// CONSTANTS //
const GET_PROPERTIES = 'GET_PROPERTIES';
const ADD_PROPERTY = 'ADD_PROPERTY';
const SAVE_IMG = 'SAVE_IMG';

// STATE //
const initialState = {
    properties: [],
    isLoading: false,
    didErr: false,
    errMessage: null,
    img: ''
    
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

export function addProperty(propertyName, street, city, state, zip, img){
    return {
        type: ADD_PROPERTY,
        payload: axios.post('/addproperty', {
            prop_name: propertyName,
            street: street,
            city: city,
            state: state,
            zip: zip,
            img: img
        }).then(response => {
            console.log("add property action creator", response);
            return response.data;
        }).catch(err => {console.log(err)})
    }
}

export function saveImg(img){
    console.log(img, "IMAGE HERE")
    return {
        type: SAVE_IMG,
        payload: img
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

        case `${SAVE_IMG}_PENDING`:
            return Object.assign({}, state, { isLoading: true });
        case `${SAVE_IMG}_FULFILLED`:
            return Object.assign({}, state, { isLoading: false, properties: action.payload });
        case `${SAVE_IMG}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });
         

    default:
        return state;
    }
}

