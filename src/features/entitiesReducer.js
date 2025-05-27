const {bugReducer} = require("./bugs/bugReducer");
const {projectReducer} = require("./projects/projectReducer");
const {combineReducers} = require("redux");

const entitiesReducer =  combineReducers({
    bugs:bugReducer,
    projects:projectReducer,
});

module.exports = entitiesReducer;