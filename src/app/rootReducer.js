const {combineReducers} = require("redux");
const {usersReducer } = require("../features/users/usersReducer");
const {bugReducer} = require("../features/bugs/bugReducer");
const {projectReducer} = require("../features/projects/projectReducer");

const RootReducer = combineReducers({
    bugs:bugReducer,
    projects:projectReducer,
    users:usersReducer ,

});

module.exports = {RootReducer};