// src/middleware/api.js
const api = state=>next=>action=>{

    return next(action);
};

module.exports = api;