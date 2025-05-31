// src/actions/apiActions.js
const {createAction} = require("@reduxjs/toolkit");
const {bugActions} = require("../features/bugs/bugReducer")

const apiCallBegan = createAction("api/callBegan");
const apiCallSuccess = createAction("api/callSuccess");
const apiCallFailed = createAction("api/callFailed");

// action creators

const url = "/bugs";
const loadBugs = ()=>apiCallBegan(
    {
        url,
        onSuccess: bugActions.bugReceived.type,
    }
)

module.exports={
    apiCallBegan,
    apiCallSuccess,
    apiCallFailed,

    loadBugs,
}