const { createSelector } = require("reselect");

// Select the bugs state
const selectBugs = state => state.bugs;

// Return only unsolved bugs
const selectUnsolvedBugs = createSelector(
    [selectBugs],
    bugs => bugs.list.filter(bug => !bug.solved)
);

module.exports = {
    selectUnsolvedBugs,
};
