import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
    name : 'Krishna',
    designation : 'Software Engineering',
    phoneNumber : '12345678998',
    email : 'krishna@example.com',
    address : 'dwarka,gujarat,india',
    githumProfile : 'example@githum.com',
    linkdinProfile : 'example@linkdin.com'
}

let detailesReducer = createSlice({
    name : 'DETAILES_REDUCER',
    initialState ,
    reducers : {
        changeDetailes : (state , action)=>{
            let { payload } = action; 
            console.log({payload})
            return {...state, [payload.name] : payload.value };
        }
    }
})

export const { changeDetailes  } = detailesReducer.actions;

let action = detailesReducer.reducer;
export default action;