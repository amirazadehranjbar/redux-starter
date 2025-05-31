// src/middleware/api.js


// const axios = require("axios");
//
// const api = store => next => async action => {
//     if (action.type !== "bugs/bugsRequested") return next(action);
//
//     next(action); // dispatch bugsRequested
//
//     try {
//         const response = await axios.get("http://localhost:9001/api/bugs");
//         store.dispatch({ type: "bugs/bugReceived", payload: response.data });
//     } catch (e) {
//         store.dispatch({ type: "bugs/bugRequestFailed", payload: e.message });
//     }
// };
//
// module.exports = api;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const axios = require("axios");

const api = store => next => async action => {
    if (action.type !== "apiCallBegan") return next(action);

    next(action);

    const { url, method = "get", data, onSuccess, onError } = action.payload;

    try {
        const response = await axios.request({
            baseURL: "http://localhost:9001/api",
            url,
            method,
            data
        });

        store.dispatch({ type: onSuccess, payload: response.data });

    } catch (e) {
        store.dispatch({ type: onError, payload: e.message ?? e });
    }
};

module.exports = api;
