import axios from 'axios';

// CONSTANTS //
const GET_PROPERTIES = 'GET_PROPERTIES';
const ADD_PROPERTY = 'ADD_PROPERTY';
const GET_PROPERTY = "GET_PROPERTY";
const ADD_WORK_ORDER = "ADD_WORK_ORDER";
const ADD_EXPENSES = 'ADD_EXPENSES';


// STATE //
const initialState = {
    properties: [],
    property: [],
    workOrder: [],
    expenses: [],
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

export function addWorkOrder(propId, type, memo){
   
    return {
        type: ADD_WORK_ORDER,
        payload: axios
        .post('/addworkorder', {prop_id: propId, type: type, memo: memo})
        .then((res) => {
            return res.data
        }).catch(console.log)
    }
}

export function addExpenses( assessedValue, downPayment, monthlyMortgage, monthlyDues, monthlyTaxes, monthlyInsurance, monthlyUtilities, propId) {
    return {
        type: ADD_EXPENSES,
        payload: axios
        .post('/expenses', {
            assessed_value:assessedValue,
            down_payment: downPayment,
            monthly_mortgage: monthlyMortgage,
            monthly_dues:  monthlyDues,
            monthly_taxes: monthlyTaxes,
            monthly_insurance: monthlyInsurance,
            monthly_utilities: monthlyUtilities,
            id: propId
        })
        .then(response => {
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
        
        // ADD EXPENSES //
        case `${ADD_EXPENSES}_PENDING`:
            return Object.assign({}, state, {isLoading: true});

        case `${ADD_EXPENSES}_FULFILLED`:
            return Object.assign({}, state, {isLoading: false, expenses: action.payload});

        case `${ADD_EXPENSES}_REJECTED`:
            return Object.assign({}, state, {isLoading: false, didErr: true, errMessage: action.payload});
         

    default:
        return state;
    }
}

