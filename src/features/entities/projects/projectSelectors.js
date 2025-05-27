const {createSelector} = require("reselect");

// get projects state
const projectState = state => state.projects;

//
const getProgressed = createSelector(
    [projectState],
    projects => projects.filter(project => project.progress >=50)
)