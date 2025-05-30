const { createSlice } = require("@reduxjs/toolkit");

let id = 0; // local bug ID counter

const bugReducer = createSlice({
    name: "bugs",
    initialState: {
        list:[],
        isLoading:false,
        lastFetch:null
    },
    reducers: {
        // Adds a new bug
        addBug: (bugs, action) => {
            bugs.list.push({
                id: ++id,
                description: action.payload.description,
                solved: false
            });
        },

        // Intended to remove a bug (but does not mutate state properly)
        removeBug: (bugs, action) => {
            return bugs.list.filter(bug => bug.id !== action.payload.id); // fixed: return new array
        },

        // Updates a bug's solved status
        updateBug: (bugs, action) => {
            const bug = bugs.list.find(bug => bug.id === action.payload.id);
            if (bug) {
                bug.solved = action.payload.solvedValue;
            }
        }
    },
});

module.exports = {
    bugReducer: bugReducer.reducer,
    bugActions: bugReducer.actions,
};
