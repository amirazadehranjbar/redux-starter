// src/index.js
const { store } = require("./app/store");
const { bugActions } = require("./features/bugs/bugReducer");
const { usersActions } = require("./features/users/userReducer");
const { projectActions } = require("./features/projects/projectReducer");
const { selectUnsolvedBugs } = require("./features/bugs/bugSelectors");
const { getBugsByUser, getUserNameByID } = require("./features/users/userSelectors");

////////////////////////////////////////////////////////// ⚒️Project⚒️ /////////////////////////////////////////////
// Dispatch some project actions
store.dispatch(projectActions.addProject({ projectName: "project 1", progress: 10 }));
store.dispatch(projectActions.addProject({ projectName: "project 2", progress: 20 }));
store.dispatch(projectActions.addProject({ projectName: "project 3", progress: 30 }));

////////////////////////////////////////////////////////// 🐛Bug🐛 /////////////////////////////////////////////
// Dispatch some bug actions
store.dispatch(bugActions.addBug({ description: "bug 1" }));
store.dispatch(bugActions.addBug({ description: "bug 2" }));
store.dispatch(bugActions.addBug({ description: "bug 3" }));

// Update the 'solved' status of a bug
store.dispatch(bugActions.updateBug({ id: 2, solvedValue: true }));

// Run selector to retrieve unsolved bugs (but not logged here)
selectUnsolvedBugs(store.getState());

////////////////////////////////////////////////////////// 🧔User🧔 /////////////////////////////////////////////
// Dispatch some user actions
store.dispatch(usersActions.userAdd({ userName: "amir", userUploadedBugsIDs: 2 }));
store.dispatch(usersActions.userAdd({ userName: "reza", userUploadedBugsIDs: 1 }));
store.dispatch(usersActions.userAdd({ userName: "nima", userUploadedBugsIDs: 3 }));

// Add another bug to user with ID 1
store.dispatch(usersActions.addBug({ userID: 1, userUploadedBugsIDs: 1 }));

// Use selectors to get bugs and username by userID
const userBugsSelector = getBugsByUser(1);
const userBugs = userBugsSelector(store.getState());

const userNameSelector = getUserNameByID(2);
const userName = userNameSelector(store.getState());

///////////////////////////////////////////// 🏴 log results 🏴 ////////////////////////////////////////////////////////
// console.log("User bugs 🐛🐛🐛:", userBugs);
// console.log(`User Name : ${userName}`);

