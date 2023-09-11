const core = require("@actions/core");
const github = require("@actions/github");

const name = core.getInput("name");

console.log(`Hello ${name}!`);
