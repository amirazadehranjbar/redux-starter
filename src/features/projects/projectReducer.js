const {createSlice} = require("@reduxjs/toolkit");

let projectID = 0;

const ProjectReducer = createSlice({

    name: "projects",
    initialState: [],

    reducers: {

        // add project
        addProject: (state, action) => {
            state.push({
                id: ++projectID,
                projectName: action.payload.projectName,
                progress:0
            });
        },

        // update
    }
});

module.exports = {

    projectReducer: ProjectReducer.reducer,
    projectActions: ProjectReducer.actions,
}