#!/usr/bin/env bash

. config.sh

echo "$separator"
echo "[$name] Cleaning repository"
echo "$separator"
cd ../
rm -rf ".git"
echo "[$name] Complete"
