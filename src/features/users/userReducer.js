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
                userUploadedBugsIDs: [], // مقداردهی اولیه به عنوان یک آرایه خالی
            });
        },

        // Add a bug to an existing user by ID
        addBug: (users, action) => {
            const { userID, bugID } = action.payload; // تغییر نام به bugID برای وضوح بیشتر
            const user = users.find(user => user.userID === userID);
            if (user) {
                user.userUploadedBugsIDs.push(bugID); // اضافه کردن bugID به آرایه
            }
        }
    }
});

module.exports = {
    usersReducer: userReducer.reducer,
    usersActions: userReducer.actions,
};