#!/usr/bin/env node

const shell = require("shelljs");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

shell.rm("-rf", ".git");
fs.unlink(path.join(__dirname, "setup.js"), () => {});
exec("git init && git add . && git commit -m \"Initial commit\"");
