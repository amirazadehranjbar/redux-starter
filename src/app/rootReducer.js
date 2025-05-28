const {combineReducers} = require("redux");
const {usersReducer } = require("../features/users/userReducer");
const {bugReducer} = require("../features/bugs/bugReducer");
const {projectReducer} = require("../features/projects/projectReducer");

// Combine all feature reducers into a single root reducer
const RootReducer = combineReducers({
    bugs: bugReducer,
    projects: projectReducer,
    users: usersReducer,
});

module.exports = { RootReducer };