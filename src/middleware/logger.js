const Logger = storeAPI => next => action => {
    console.log("[Logger] Dispatching action:", action);
    const result = next(action); // Pass action to the next middleware or reducer
    console.log("[Logger] Next state:", storeAPI.getState());
    return result;
};

module.exports = Logger;