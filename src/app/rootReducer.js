const {combineReducers} = require("redux");
const userReducer = require("../features/users/usersReducer");
const {bugReducer} = require("../features/entities/bugs/bugReducer");
const {projectReducer} = require("../features/entities/projects/projectReducer");

const RootReducer = combineReducers({
    bugs:bugReducer,
    projects:projectReducer,
    user:userReducer,

});

module.exports = {RootReducer};