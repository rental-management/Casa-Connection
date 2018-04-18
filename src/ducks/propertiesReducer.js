import axios from "axios";

// CONSTANTS //
const GET_PROPERTIES = "GET_PROPERTIES";
const ADD_PROPERTY = "ADD_PROPERTY";
const GET_PROPERTY = "GET_PROPERTY";
const ADD_WORK_ORDER = "ADD_WORK_ORDER";
const ADD_EXPENSES = "ADD_EXPENSES";
const DELETE_PROPERTY = "DELETE_PROPERTY";
const GET_WORK_ORDERS = "GET_WORK_ORDERS";
const GET_EXPENSES_BY_ID = "GET_EXPENSES_BY_ID";
const DELETE_WORK_ORDERS = "DELETE_WORK_ORDERS";
const GET_TENANT = "GET_TENANT";
const EDIT_TENANT = "EDIT_TENANT";
const EDIT_EXPENSES = "EDIT_EXPENSES";
const GET_ALL_WORK_ORDERS = "GET_ALL_WORK_ORDERS";
const DELETE_ALL_WO_BY_PROP = "DELETE_ALL_WO_BY_PROP";



// STATE //
const initialState = {
  properties: [],
  property: [],
  workOrders: [],
  workOrder: [],
  expenses: [],
  singlePropExpenses: [],
  tenant: [],
  isLoading: false,
  didErr: false,
  errMessage: null
};

// ACTION CREATORS //
export function getProperties() {
  return {
    type: GET_PROPERTIES,
    payload: axios
      .get("/properties")
      .then(response => {
   
        return response.data;
      })
      .catch(console.log)
  };
}

export function addProperty(
  propertyName,
  street,
  city,
  state,
  zip,
  img,
  firstName,
  lastName,
  phone,
  email,
  emergContact,
  emergNum
) {
  return {
    type: ADD_PROPERTY,
    payload: axios
      .post("/addproperty", {
        prop_name: propertyName,
        street: street,
        city: city,
        state: state,
        zip: zip,
        img: img,
        t_f_name: firstName,
        t_l_name: lastName,
        t_phone: phone,
        t_email: email,
        emerg_contact_name: emergContact,
        emerg_contact_phone: emergNum
      })
      .then(response => {
     
        return response.data;
      })
      .catch(err => {
        console.log(err);
      })
  };
}

export function getProperty(id) {
  return {
    type: GET_PROPERTY,
    payload: axios
      .get(`/property/${id}`, {
        id: id
      })
      .then(response => {
     
        return response.data;
      })
      .catch(console.log)
  };
}

export function addWorkOrder(propId, type, memo) {
  return {
    type: ADD_WORK_ORDER,
    payload: axios
      .post("/addworkorder", { prop_id: propId, type: type, memo: memo })
      .then(res => {
        return res.data;
      })
      .catch(console.log)
  };
}

export function addExpenses(
  assessedValue,
  downPayment,
  monthlyMortgage,
  monthlyDues,
  monthlyTaxes,
  monthlyInsurance,
  monthlyUtilities,
  rent,
  propId
) {
  return {
    type: ADD_EXPENSES,
    payload: axios
      .post("/expenses", {
        assessed_value: assessedValue,
        down_payment: downPayment,
        monthly_mortgage: monthlyMortgage,
        monthly_dues: monthlyDues,
        monthly_taxes: monthlyTaxes,
        monthly_insurance: monthlyInsurance,
        monthly_utilities: monthlyUtilities,
        rent: rent,
        id: propId
      })
      .then(response => {
        return response.data;
      })
      .catch(console.log)
  };
}

export function deleteProperty(propId) {
  return {
    type: DELETE_PROPERTY,
    payload: axios
      .delete("/deleteproperty", { data: { id: propId } })
      .then(res => {
        return res.data;
      })
  };
}

export function deleteWorkOrders(id) {
  return {
    type: DELETE_WORK_ORDERS,
    payload: axios
      .delete("/deleteworkorders", { data: { workorders_id: id } })
      .then(res => {
        return res.data;
      })
  };
}
//gets work orders for individual properties
export function getWorkOrders(id) {
  return {
    type: GET_WORK_ORDERS,
    payload: axios.post("/workorders", { prop_id: id }).then(res => {
      return res.data;
    })
  };
}

//gets expenses by property id
export function getExpensesById(id) {
  return {
    type: GET_EXPENSES_BY_ID,
    payload: axios.post("/getexpenses", { prop_id: id }).then(res => {
      return res.data;
    })
  };
}

//gets tenant by property id
export function getTenant(id) {
  return {
    type: GET_TENANT,
    payload: axios.post("/gettenant", { prop_id: id }).then(res => {
      return res.data;
    })
  };
}

//edit tenant information
export function editTenant(fName, lName, phone, email, emergContact, emergNum, propId){
    return {
        type: EDIT_TENANT,
        payload: axios.put('/edittenant', {
            t_f_name: fName,
            t_l_name: lName,
            phone: phone,
            email: email,
            emerg_contact_name: emergContact,
            emerg_contact_phone: emergNum,
            id: propId
        }).then((res) => {
            return res.data;
        })
    }
}

export function editExpenses(
  propValue,
  downPayment,
  mortgage,
  dues,
  taxes,
  insurance,
  utilities,
  rent,
  propId
) {
  return {
    type: EDIT_EXPENSES,
    payload: axios
      .put("/editexpenses", {
        assessed_value: propValue,
        down_payment: downPayment,
        monthly_mortgage: mortgage,
        monthly_dues: dues,
        monthly_taxes: taxes,
        monthly_insurance: insurance,
        monthly_utilities: utilities,
        rent: rent,
        id: propId
      })
      .then(res => {
        return res.data;
      })
  };
}

//gets all work orders for the logged in user
export function getAllWorkOrders() {
  return {
    type: GET_ALL_WORK_ORDERS,
    payload: axios.get("/allworkorders").then(res => {
     
      return res.data;
    })
  };
}

//deletes all work orders by property id -- not the same as deleting by work order. This is fn is necessary to allow us to delete properties because we have to delete all WO associated with that property first.
export function deleteAllWOByProp(id) {
  return {
    type: DELETE_ALL_WO_BY_PROP,
    payload: axios
      .delete("/deleteallwobyprop", { data: { id: id } })
      .then(res => {
        return res.data;
      })
  };
}

// REDUCER //
export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    //GET PROPERTIES
    case `${GET_PROPERTIES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_PROPERTIES}_FULFILLED`:
    
      return Object.assign({}, state, {
        isLoading: false,
        properties: action.payload
      });

    case `${GET_PROPERTIES}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //ADD PROPERTY
    case `${ADD_PROPERTY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${ADD_PROPERTY}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        properties: action.payload
      });

    case `${ADD_PROPERTY}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    // GET SINGLE PROPERTY
    case `${GET_PROPERTY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_PROPERTY}_FULFILLED`:
     
      return Object.assign({}, state, {
        isLoading: false,
        property: action.payload
      });

    case `${GET_PROPERTY}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    // ADD EXPENSES //
    case `${ADD_EXPENSES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${ADD_EXPENSES}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        expenses: action.payload
      });

    case `${ADD_EXPENSES}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //DELETE PROPERTY
    case `${DELETE_PROPERTY}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${DELETE_PROPERTY}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        property: action.payload
      });

    case `${DELETE_PROPERTY}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //GET WORK ORDERS
    case `${GET_WORK_ORDERS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_WORK_ORDERS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        workOrders: action.payload
      });

    case `${GET_WORK_ORDERS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //GET SINGLE PROPERTY EXPENSES BY ID
    case `${GET_EXPENSES_BY_ID}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_EXPENSES_BY_ID}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        singlePropExpenses: action.payload
      });

    case `${GET_EXPENSES_BY_ID}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    // DELETE WORK ORDERS //
    case `${DELETE_WORK_ORDERS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${DELETE_WORK_ORDERS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        workOrders: action.payload
      });

    case `${DELETE_WORK_ORDERS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //GET TENANT BY PROPERTY ID
    case `${GET_TENANT}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_TENANT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        tenant: action.payload
      });
    case `${GET_TENANT}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //EDIT TENANT
    case `${EDIT_TENANT}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${EDIT_TENANT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        tenant: action.payload
      });

    case `${EDIT_TENANT}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //GET ALL WORK ORDERS BY USER ID
    case `${GET_ALL_WORK_ORDERS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_ALL_WORK_ORDERS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        workOrders: action.payload
      });

    case `${GET_ALL_WORK_ORDERS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

      //EDIT EXPENSES
    case `${EDIT_EXPENSES}_PENDING`:
      return Object.assign({}, state, {
          isLoading: true
      });
    case `${EDIT_EXPENSES}_FULFILLED`:
      return Object.assign({}, state, {
          isLoading: false,
          expenses: action.payload
      });
    case `${EDIT_EXPENSES}_REJECTED`:
      return Object.assign({}, state, {
          isLoading: false,
          didErr: true,
          errMessage: action.payload
      });
    //Add work order
    case `${ADD_WORK_ORDER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${ADD_WORK_ORDER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        workOrder: action.payload
      });

    case `${ADD_WORK_ORDER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true,
        errMessage: action.payload
      });

    //DELETE ALL WORK ORDERS BY PROP
    case `${DELETE_ALL_WO_BY_PROP}_PENDING`:
    console.log('pending action: ', action.payload);
      return Object.assign({}, state, {isLoading: true});

    case `${DELETE_ALL_WO_BY_PROP}_FULFILLED`:
      return Object.assign({}, state, {isLoading: false, workOrders: action.payload});
    
    case `${DELETE_ALL_WO_BY_PROP}_REJECTED`:
    console.log('rejected action: ', action.payload);
      return Object.assign({}, state, {isLoading: false, didErr: true, errMessage: action.payload});

    default:
      return state;
  }
}
