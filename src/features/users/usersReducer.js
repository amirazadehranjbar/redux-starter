const {createSlice} = require("@reduxjs/toolkit");

let userID = 0;

const initialState = [];


const usersReducer = createSlice(
    {
        name: "users",
        initialState: initialState,
        reducers: {

            //➕ add user
            userAdd: (users, action) => {
                users.push({
                    userID: ++userID,
                    userName: action.payload.userName,
                    userUploadedBugsIDs: [action.payload.userUploadedBugsIDs || 0],
                })
            },

            // ➕ add new bug to user
            addBug: (state, action) => {
                const { userID, userUploadedBugsIDs } = action.payload;
                const user = state.find(user => user.userID === userID);
                if (user) {
                    user.userUploadedBugsIDs.push(userUploadedBugsIDs);
                }
            }


        }
    }
);

module.exports = {
    usersReducer: usersReducer.reducer,
    usersActions: usersReducer.actions,
}