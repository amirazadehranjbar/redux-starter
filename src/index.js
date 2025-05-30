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
store.dispatch(bugActions.addBug({ description: "bug 1" })); // Bug ID 1
store.dispatch(bugActions.addBug({ description: "bug 2" })); // Bug ID 2
store.dispatch(bugActions.addBug({ description: "bug 3" })); // Bug ID 3

// Update the 'solved' status of a bug
store.dispatch(bugActions.updateBug({ id: 2, solvedValue: true }));

// Run selector to retrieve unsolved bugs (but not logged here)
selectUnsolvedBugs(store.getState());

////////////////////////////////////////////////////////// 🧔User🧔 /////////////////////////////////////////////
// Dispatch some user actions
store.dispatch(usersActions.userAdd({ userName: "amir" })); // User ID 1
store.dispatch(usersActions.userAdd({ userName: "reza" })); // User ID 2
store.dispatch(usersActions.userAdd({ userName: "nima" })); // User ID 3

// Add bugs to users
store.dispatch(usersActions.addBug({ userID: 1, bugID: 1 })); // اضافه کردن باگ 1 به کاربر amir
store.dispatch(usersActions.addBug({ userID: 1, bugID: 3 })); // اضافه کردن باگ 3 به کاربر amir
store.dispatch(usersActions.addBug({ userID: 2, bugID: 2 })); // اضافه کردن باگ 2 به کاربر reza

// Use selectors to get bugs and username by userID
const userBugsSelector = getBugsByUser(1); // ارسال userID به صورت مستقیم
const userBugs = userBugsSelector(store.getState());

const userNameSelector = getUserNameByID(2); // ارسال userID به صورت مستقیم
const userName = userNameSelector(store.getState());

///////////////////////////////////////////// 🏴 log results 🏴 ////////////////////////////////////////////////////////
console.log("User bugs 🐛🐛🐛:", userBugs);
console.log(`User Name : ${userName}`);
console.log(store.getState()); // نمایش کل state برای اشکال‌زدایی