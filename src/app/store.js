const { configureStore } = require("@reduxjs/toolkit");
const { RootReducer } = require("./rootReducer");
const logger = require("../middleware/logger");
const api = require("../middleware/api");

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaults = getDefaultMiddleware();

        return defaults.concat(logger , api);
    },
});

module.exports = { store };
