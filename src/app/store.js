const { configureStore } = require("@reduxjs/toolkit");
const { RootReducer } = require("./rootReducer");
const logger = require("../middleware/logger");

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaults = getDefaultMiddleware();
        console.log("🔍 Default Middleware List:", defaults); // <-- log here
        return defaults.concat(logger);
    },
});

module.exports = { store };
