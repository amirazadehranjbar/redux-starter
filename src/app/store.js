const { configureStore } = require("@reduxjs/toolkit");
const {RootReducer} = require("./rootReducer");

const store = configureStore({ reducer: RootReducer });

module.exports = { store };
