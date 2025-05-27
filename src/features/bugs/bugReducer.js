const {createSlice} = require("@reduxjs/toolkit");


let id = 0;

const bugReducer = createSlice({
    name: "bugs", initialState: [], reducers: {


        addBug: (state, action) => {
            state.push({
                id: ++id, description: action.payload.description, solved: false
            });
        },

        removeBug: (state, action) => {
            state.filter(bug => bug.id !== action.payload.id);
        },


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


