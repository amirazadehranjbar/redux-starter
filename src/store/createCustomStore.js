const reducer = require("./reducer");

const createCustomStore = (reducer) => {


    let state;
    let listeners = [];

    const subscribe = (listener) => {

        listeners.push(listener);

    }

    const dispatch = (action) => {

        // call the reducer for getting new state
        state = reducer(state, action)
        // informed the subscribers
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();            
        }

    }

    const getState = () => {
        return state;
    }

    return {
        subscribe,
        getState,
        dispatch,
    };


};



module.exports = createCustomStore(reducer);