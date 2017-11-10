#!/usr/bin/env bash

name="CreateJS Boilerplate"
separator="-----------------------------------------------------------"
timestamp() {
  date +"%T"
}
currentTime=`timestamp`

# deleting git repository
echo "$separator"
echo "[$currentTime][$name] Deleting repository"
echo "$separator"
rm -rf .git
echo "[$currentTime][$name] Complete"

# creating new repository
echo "$separator"
echo "[$currentTime][$name] Initializing new repository"
echo "$separator"
git init && git add . && git commit -m "Initial commit"
echo "[$currentTime][$name] Complete"
