const { store } = require("./app/store");
const {projectActions} = require("./features/projects/projectReducer");
const { selectUnsolvedBugs } = require("./features/bugs/bugSelectors");
const {bugActions} = require("./features/bugs/bugReducer");
const {usersActions}=require("./features/users/usersReducer")

// add projects
store.dispatch(projectActions.addProject({projectName:"project 1" , progress:10}));
store.dispatch(projectActions.addProject({projectName:"project 2", progress:20}));
store.dispatch(projectActions.addProject({projectName:"project 3", progress:30}));

// add bugs
store.dispatch(bugActions.addBug({description:"bug 1"}));
store.dispatch(bugActions.addBug({description:"bug 2"}));
store.dispatch(bugActions.addBug({description:"bug 3"}));

store.dispatch(bugActions.updateBug({id:2 , solvedValue:true}));

// update bug solving using selector
selectUnsolvedBugs(store.getState());

// add user
store.dispatch(usersActions.userAdd({userName:"amir",userUploadedBugsIDs:2}));
store.dispatch(usersActions.userAdd({userName:"reza",userUploadedBugsIDs:1}));
store.dispatch(usersActions.userAdd({userName:"nima",userUploadedBugsIDs:3}));


store.dispatch(usersActions.addBug({userID:1 , userUploadedBugsIDs:1}));

console.log(store.getState())

