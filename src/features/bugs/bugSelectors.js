// src/features/bugs/bugSelectors.js
const { createSelector } = require("reselect");

/**
 * Get all bugs from the state
 */
const selectBugs = state => state.entities.bugs;

/**
 * Get only unsolved bugs (memoized)
 */
const selectUnsolvedBugs = createSelector(
    [selectBugs],
    bugs => bugs.filter(bug => !bug.solved)
);

// export
module.exports = {
    selectUnsolvedBugs,
};
