const { createSlice } = require("@reduxjs/toolkit");

let id = 0; // local bug ID counter

const bugReducer = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        // Adds a new bug
        addBug: (state, action) => {
            state.push({
                id: ++id,
                description: action.payload.description,
                solved: false
            });
        },

        // Intended to remove a bug (but does not mutate state properly)
        removeBug: (state, action) => {
            return state.filter(bug => bug.id !== action.payload.id); // fixed: return new array
        },

        // Updates a bug's solved status
        updateBug: (state, action) => {
            const bug = state.find(bug => bug.id === action.payload.id);
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
