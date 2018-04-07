import axios from 'axios';

//Constants

const GET_CONTRACTORS = 'GET_CONTRACTORS';
const ADD_CONTRACTOR = 'ADD_CONTRACTOR';
const DELETE_CONTRACTOR = 'DELETE_CONTRACTOR';


//STATE

const initialState = {
    contractors: [],
    isLoading: false,
    didErr: false,
    errMessage: null
};


//ACTION CREATORS

export function getContractors() {
    return{
        type: GET_CONTRACTORS,
        payload: axios
            .get('/contractors')
            .then(response => {
                return response.data
            }).catch(console.log)
    }
}

export function addContractor(propName, compName, type, firstName, lastName, phone, email, street, city, state, zip) {
    return{
        type: ADD_CONTRACTOR,
        payload: axios  
            .post('/addcontractor', {
                prop_name: propName,
                company_name: compName,
                type: type,
                f_name: firstName,
                l_name: lastName,
                phone: phone,
                email: email,
                street: street,
                city: city,
                state: state,
                zip: zip,
            }).then(response => {
                console.log(response, "action creator add cont")
                return response.data
            }).catch(console.log)
    }
}

export function deleteContractor(conId) {
    return {
        type: DELETE_CONTRACTOR,
        payload: axios
        .delete('/deletecontractor', {data: {id: conId}})
        .then((res) => {
            return res.data;
        })
    }
}


//REDUCER

export default function reducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        //GET CONTRACTORS
        case `${GET_CONTRACTORS}_PENDING`:
            return Object.assign({}, state, { isLoading: true});
        
        case `${GET_CONTRACTORS}_FULFILLED`:
            return Object.assign({}, state, { isLoading: false, contractors: action.payload });

        case `${GET_CONTRACTORS}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });

        //ADD CONTRACTORS
        case `${ADD_CONTRACTOR}_PENDING`:
            return Object.assign({}, state, { isLoading: true});
        
        case `${ADD_CONTRACTOR}_FULFILLED`:
        console.log(action.payload);
            return Object.assign({}, state, { isLoading: false, contractors: action.payload });

        case `${ADD_CONTRACTOR}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });

        //delete contractor
        case `${DELETE_CONTRACTOR}_PENDING`:
            return Object.assign({}, state, { isLoading: true});
        
        case `${DELETE_CONTRACTOR}_FULFILLED`:
        console.log(action.payload);
            return Object.assign({}, state, { isLoading: false, contractors: action.payload });

        case `${DELETE_CONTRACTOR}_REJECTED`:
            return Object.assign({}, state, { isLoading: false, didErr: true, errMessage: action.payload });

    default : return state;

    }
}