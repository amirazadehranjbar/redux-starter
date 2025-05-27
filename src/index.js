const { store } = require("./app/store");
const {projectActions} = require("./features/projects/projectReducer");
const { selectUnsolvedBugs } = require("./features/bugs/bugSelectors");
const {bugActions} = require("./features/bugs/bugReducer");

// add projects
store.dispatch(projectActions.addProject({projectName:"project 1" , progress:10}));
store.dispatch(projectActions.addProject({projectName:"project 2", progress:20}));
store.dispatch(projectActions.addProject({projectName:"project 3", progress:30}));

// add bugs
store.dispatch(bugActions.addBug({description:"bug 1"}));
store.dispatch(bugActions.addBug({description:"bug 2"}));
store.dispatch(bugActions.addBug({description:"bug 3"}));

store.dispatch(bugActions.updateBug({id:2 , solvedValue:true}))

//
const unsolved = selectUnsolvedBugs(store.getState());
console.log("Unsolved Bugs:", unsolved);


