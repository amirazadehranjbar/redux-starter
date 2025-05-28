const { configureStore } = require("@reduxjs/toolkit");
const { RootReducer } = require("./rootReducer");
const Logger = require("../middleware/logger");

// Create the Redux store and add middleware (including custom Logger)
const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

module.exports = { store };
