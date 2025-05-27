const {createSlice} =require("@reduxjs/toolkit");

let userID = 0;

const initialState =[];


const usersReducer = createSlice(
    {
        name:"users",
        initialState:initialState,
        reducers:{

            userAdd:(state , action)=>({

               id:++userID,
               userName: action.payload.userName,
               bugIDs:action.payload.bugIDs | 0,

            })

        }
    }
);

module.exports = {
    usersReducer:usersReducer.reducer,
    usersActions:usersReducer.actions,
}