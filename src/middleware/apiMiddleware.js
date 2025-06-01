// src/middleware/apiMiddleware.js
const axios = require("axios");
const {apiCallBegan, apiCallSuccess, apiCallFailed} = require("../actions/apiActions");

const apiMiddleware = store => next => async action => {
    if (action.type !== apiCallBegan.type) return next(action);

    const {url, method = "get", data, onSuccess, onError, onStart} = action.payload;

    if (onStart) store.dispatch({type: onStart});

    next(action);

    try {
        const response = await axios.request({
            baseURL: "http://localhost:9001/api",
            url,
            method,
            data
        });

        // general success
        store.dispatch(apiCallSuccess(response.data));
        // select
        if (onSuccess) store.dispatch({type: onSuccess, payload: response.data});

    } catch (e) {
        // general errors
        store.dispatch(apiCallFailed(e.message));
        // select
        if (onError) store.dispatch({type: onError, payload: e.message ?? e});
    }
};

module.exports = apiMiddleware;
