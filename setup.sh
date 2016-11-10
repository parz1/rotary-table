#!/usr/bin/env bash

name="CreateJS Boilerplate"
separator="-----------------------------------------------------------"
timestamp() {
  date +"%T"
}
clearProcess() {
  PID=$!
  disown $PID
  kill -9 $PID
  printf "\n"
}
executeCommand() {
  printf "Please wait"
  while sleep 0.5; do
    printf "."
  done & $1
  clearProcess
}
currentTime=`timestamp`

# deleting git repository
echo "$separator"
echo "[$currentTime][$name] Deleting repository"
echo "$separator"
rm -rf .git
echo "[$currentTime][$name] Complete"

# installing npm and bower dependencies
echo "$separator"
echo "[$currentTime][$name] Installing dependencies"
echo "$separator"
executeCommand $"npm install"
echo "[$currentTime][$name] NPM dependencies installed"
executeCommand $"bower install"
echo "[$currentTime][$name] Bower dependencies installed"
echo "[$currentTime][$name] Complete"

# creating new repository
echo "$separator"
echo "[$currentTime][$name] Initializing new repository"
echo "$separator"
git init && git add . && git commit -m "Initial commit"
echo "[$currentTime][$name] Complete"

# self deleting
rm -f "setup.sh"

# reset setup.sh file
git reset --hard
