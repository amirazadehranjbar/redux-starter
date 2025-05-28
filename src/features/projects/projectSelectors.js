const { createSelector } = require("reselect");

// Select all projects
const projectState = state => state.projects;

// Return projects that have progress >= 50
const getProgressed = createSelector(
    [projectState],
    projects => projects.filter(project => project.progress >= 50)
);