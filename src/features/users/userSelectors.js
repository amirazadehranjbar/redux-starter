const { createSelector } = require("reselect");

const users = state => state.users;
const bugs = state => state.bugs;

// Select bugs that were uploaded by a given user
const getBugsByUser = (targetUserID) => createSelector( // تغییر نام پارامتر برای وضوح بیشتر
    [users, bugs],
    (allUsers, allBugs) => {
        const targetUser = allUsers.find(user => user.userID === targetUserID); // استفاده از targetUserID
        if (!targetUser) return [];
        return allBugs.list.filter(bug => targetUser.userUploadedBugsIDs.includes(bug.id));
    }
);

// Return userName by userID
const getUserNameByID = (targetUserID) => createSelector( // تغییر نام پارامتر برای وضوح بیشتر
    [users],
    (allUsers) => {
        const foundedUser = allUsers.find(user => user.userID === targetUserID); // استفاده از targetUserID
        return foundedUser ? foundedUser.userName : "user not found";
    }
);

module.exports = {
    getBugsByUser,
    getUserNameByID,
};
