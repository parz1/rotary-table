#!/usr/bin/env node

// TODO
// add: 
// 1. error scenarios
// 2. dependency install
// 3. readme edition

const shell = require("shelljs");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

shell.rm("-rf", ".git");
fs.unlink(path.join(__dirname, "setup.js"), () => {});
exec("git init && git add . && git commit -m \"Initial commit\"");
