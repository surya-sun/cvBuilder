import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    firstName : 'Lord',
    lastName : 'Krishna',
    phoneNumber : '',
    Email : '',
    Address : '',
    githumProfile : '',
    linkdinProfile : ''
}

let detailesReducer = createSlice({
    name : 'DETAILES_REDUCER',
    initialState ,
    reducers : {
        changeDetailes : (state , action)=>{

        }
    }
})

let action = detailesReducer.reducer;

export default action;