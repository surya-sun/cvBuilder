import { createSlice } from "@reduxjs/toolkit";

let initialState =  {
        // detailes screen state
                        name : '',
                        designation : '',
                        phoneNumber : '',
                        email : '',
                        address : '',
                        githumProfile : '',
                        linkdinProfile : '',

                        // ---------
                        name_ : 'Krishna',
                        designation_ : 'Software Engineering',
                        phoneNumber_ : '12345678998',
                        email_ : 'krishna@example.com',
                        address_ : 'dwarka,gujarat,india',
                        githumProfile_ : 'example@githum.com',
                        linkdinProfile_ : 'example@linkdin.com',

    // summary screen state
        summary : "",

    // Education screen state 
        education : [],
        
    }

let detailesReducer = createSlice({
    name : 'DETAILES_REDUCER',
    initialState ,
    reducers : {
        changeDetailes : (state , action)=>{
            let { payload } = action;
            console.log(payload);
            return {...state, [payload.name] : payload.value };
        }
    }
})

export const { changeDetailes  } = detailesReducer.actions;

let action = detailesReducer.reducer;
export default action;