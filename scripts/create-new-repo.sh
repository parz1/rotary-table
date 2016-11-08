#!/usr/bin/env bash

. config.sh

echo "-----------------------------------------------------------"
echo "[$name] Initializing new repository"
echo "-----------------------------------------------------------"
cd ../
git init && git add -A && git commit -m "Initial commit"
echo "[$name] Complete"
