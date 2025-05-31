// src/index.js
const { store } = require("./app/store");
const {loadBugs} = require("./actions/apiActions");

store.dispatch(loadBugs());

console.log(store.getState());