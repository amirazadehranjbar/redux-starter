const {createSlice} = require("@reduxjs/toolkit");

let projectID = 0;

const ProjectReducer = createSlice({

    name: "projects",
    initialState: [],

    reducers: {

        addProject: (state, action) => {
            state.push({
                id: ++projectID,
                projectName: action.payload.projectName,
                progress:0
            });
        },
    }
});

module.exports = {

    projectReducer: ProjectReducer.reducer,
    projectActions: ProjectReducer.actions,
}