#!/usr/bin/env bash

. config.sh

echo "$separator"
echo "[$name] Initializing new repository"
echo "$separator"
cd ../
git init && git add -A && git commit -m "Initial commit"
echo "[$name] Complete"
