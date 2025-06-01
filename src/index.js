// src/index.js
const { store } = require("./app/store");
const {loadBugs} = require("./actions/apiActions");

store.dispatch(loadBugs());

setTimeout(()=>{store.dispatch(loadBugs())},2000);
