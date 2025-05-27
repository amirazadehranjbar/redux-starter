const {combineReducers} = require("redux");
const entitiesReducer = require("../features/entitiesReducer");

const RootReducer = combineReducers({
    entities:entitiesReducer,

});

module.exports = {RootReducer};