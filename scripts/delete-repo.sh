#!/usr/bin/env bash

. config.sh

echo "$separator"
echo "[$name] Deleting repository"
echo "$separator"
cd ../
rm -rf ".git"
echo "[$name] Complete"
