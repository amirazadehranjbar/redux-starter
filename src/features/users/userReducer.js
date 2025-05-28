const { createSlice } = require("@reduxjs/toolkit");

let userID = 0;
const initialState = [];

const userReducer = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        // Add a new user
        userAdd: (users, action) => {
            users.push({
                userID: ++userID,
                userName: action.payload.userName,
                userUploadedBugsIDs: [action.payload.userUploadedBugsIDs || 0],
            });
        },

        // Add a bug to an existing user by ID
        addBug: (state, action) => {
            const { userID, userUploadedBugsIDs } = action.payload;
            const user = state.find(user => user.userID === userID);
            if (user) {
                user.userUploadedBugsIDs.push(userUploadedBugsIDs);
            }
        }
    }
});

module.exports = {
    usersReducer: userReducer.reducer,
    usersActions: userReducer.actions,
};