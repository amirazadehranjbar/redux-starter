const {configureStore} = require("@reduxjs/toolkit");
const {RootReducer} = require("./rootReducer");
const logger = require("../middleware/loggerMiddleware");
const apiMiddleware = require("../middleware/apiMiddleware");

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaults = getDefaultMiddleware();

        return defaults.concat(logger, apiMiddleware);
    },
});

module.exports = {store};
