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
               userUploadedBugsIDs:action.payload.userUploadedBugsIDs | 0,

            })

        }
    }
);

module.exports = {
    usersReducer:usersReducer.reducer,
    usersActions:usersReducer.actions,
}