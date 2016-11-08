#!/usr/bin/env bash

name="CreateJS Boilerplate"
separator="-----------------------------------------------------------"

# deleting git repository
echo "$separator"
echo "[$name] Deleting repository"
echo "$separator"
rm -rf ".git"
echo "[$name] Complete"

# installing npm and bower dependencies
echo "$separator"
echo "[$name] Installing dependencies"
echo "$separator"
npm install
echo "[$name] NPM dependencies installed"
bower install
echo "[$name] Bower dependencies installed"
echo "[$name] Complete"

# creating new repository
echo "$separator"
echo "[$name] Initializing new repository"
echo "$separator"
git init && git add . && git commit -m "Initial commit"
echo "[$name] Complete"

# self deleting
rm -rf "setup.sh"

# reset setup.sh file
git reset -- setup.sh
