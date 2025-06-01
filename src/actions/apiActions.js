// src/actions/apiActions.js
const {createAction} = require("@reduxjs/toolkit");
const {bugActions} = require("../features/bugs/bugReducer")

const apiCallBegan = createAction("api/callBegan");
const apiCallSuccess = createAction("api/callSuccess");
const apiCallFailed = createAction("api/callFailed");

// action creators

const url = "/bugs";

// get bug from server
const loadBugs = () => (dispatch, getState) => {
    const { lastFetch } = getState().bugs;


    const diffInMinutes = Date.now() - lastFetch;
    if (diffInMinutes < 10 * 60 * 1000) return;

    dispatch(apiCallBegan({
        url,
        onStart: bugActions.bugRequested.type,
        onSuccess: bugActions.bugReceived.type,
        onError: bugActions.bugRequestFailed.type,
    }));
};

// post new bug to server
const addBug = (bug)=>{

    apiCallBegan({
        url,
        method:"post",
        onSuccess:bugActions.addBug.type,
    })

}


// export
module.exports={
    apiCallBegan,
    apiCallSuccess,
    apiCallFailed,

    loadBugs,
}