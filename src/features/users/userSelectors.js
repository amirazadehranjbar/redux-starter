const { createSelector } = require("reselect");

const users = state => state.users;
const bugs = state => state.bugs;

// Select bugs that were uploaded by a given user
const getBugsByUser = (userID) => createSelector(
    [users, bugs],
    (users, bugs) => {
        const targetUser = users.find(user => user.userID === userID);
        if (!targetUser) return [];
        return bugs.filter(bug => targetUser.userUploadedBugsIDs.includes(bug.id));
    }
);

// Return userName by userID
const getUserNameByID = (userID) => createSelector(
    [users],
    (users) => {
        const foundedUser = users.find(user => user.userID === userID);
        return foundedUser ? foundedUser.userName : "user not found";
    }
);

module.exports = {
    getBugsByUser,
    getUserNameByID,
};
